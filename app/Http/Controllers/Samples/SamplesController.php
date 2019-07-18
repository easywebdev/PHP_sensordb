<?php

namespace App\Http\Controllers\Samples;

use App\Manufacturer;
use App\Material;
use App\Samples;
use App\Series;
use App\Tasks\ConvertUnits;
use App\Tasks\MyValidator;
use Illuminate\Http\Request;

class SamplesController
{
    use MyValidator;
    use ConvertUnits;

    /**
     * @param Request $request
     * @return array
     */
    public function getSamples(Request $request)
    {
        $err = null;
        $count = null;

        //Filters parameters
        $seriesID = $request->input('series_id');
        $materialsID = null;                              // serieID for selected material
        $manufacturersID = null;                          // serieID for selected manufacturers
        $DateTime = $request->input('DateTime');
        $findItem = $request->input('findvalue');
        $itemCount = $request->input('itemCount');

        if($request->input('materials_id')) {
            $materials = Material::find($request->input('materials_id'));

            if(count($materials) != 0) {
                foreach ($materials as $material) {
                    $serie = $material->series;
                    foreach ($serie as $data) {
                        $materialsID[] = $data['id'];
                    }
                }
            }
            else {
                $materialsID[] = 0;
            }
        }

        if($request->input('manufacturers_id')) {
            $manufacturers = Manufacturer::find($request->input('manufacturers_id'));
            if(count($manufacturers) != 0) {
                foreach ($manufacturers as $manufacturer) {
                    $serie = $manufacturer->series;
                    foreach ($serie as $data) {
                        $manufacturersID[] = $data['id'];
                    }
                }
            }
            else {
                $manufacturersID[] = 0;
            }
        }

        // Conditional clauses DB request
        $samples = Samples::when($seriesID, function ($query, $seriesID) {
            return $query->whereIn('series_id', $seriesID);
        })->when($materialsID, function ($query, $materialsID) {
            return $query->whereIn('series_id', $materialsID);
        })->when($manufacturersID, function ($query, $manufacturersID) {
            return $query->whereIn('series_id', $manufacturersID);
        })->when($DateTime, function($query, $DateTime) {
            return $query->where('date_time', '>=', $DateTime);
        })->when($findItem, function($query, $findItem) {
            return $query->where('noties', 'like', '%' . $findItem . '%')->
                            orWhere('name', 'like', '%' . $findItem . '%');
        })->orderBy($request->input('order_by'), $request->input('order'))->paginate($itemCount);

        // Add Units Information
        for($i = 0; $i < count($samples); $i++) {
            $samples[$i]['iunits'] = Samples::find($samples[$i]['id'])->serie['iunits'];
            $samples[$i]['vunits'] = Samples::find($samples[$i]['id'])->serie['vunits'];
        }

        // Add names
        for ($i = 0; $i < count($samples); $i++) {
            $samples[$i]['series_name'] = Samples::find($samples[$i]['id'])->serie['name'];
            $samples[$i]['material_name'] = Series::find($samples[$i]['series_id'])->material['name'];
            $samples[$i]['manufacturer_name'] = Series::find($samples[$i]['series_id'])->manufacturer['name'];
        }

        return[
            'err'   => $err,
            'samples' => $samples,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function addSamples(Request $request)
    {
        $err = null;
        $answer = "Samples was not added";

        //Validation
        $validateRules = [
            'samples.*.name' => 'required',
            'samples.*.series_id' => 'exists:series,id',
            'samples.*.current' => 'numeric',
            'samples.*.resistance' => 'numeric',
            'samples.*.sqr_resistance' => 'numeric',
            'samples.*.offset' => 'numeric',
            'samples.*.hall_voltage' => 'numeric',
            'samples.*.sensitive_i' => 'numeric',
            'samples.*.sensitive_v' => 'numeric',
            'samples.*.concentration' => 'numeric',
            'samples.*.resistivity' => 'numeric',
            'samples.*.mobility' => 'numeric',
            'samples.*.date_time' => 'date',
            'vunits' => 'in:V,mV,mkV,nV',
            'iunits' => 'in:A,mA,mkA,nA',
        ];
        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            // Create new array with samples data
            $samplesArr = $request->input('samples');

            for($i = 0; $i < count($samplesArr); $i++) {
                // Recalculate unuts I and V acording to their default values in DB
                $samplesArr[$i] = $this->recalculateUnits($samplesArr[$i], $request->input('iunits'), $request->input('vunits'));

                // Transform DataTime into format which needet to MySQL (from 'dd.mm.YY hh:mm:ss to YY-mm-dd hh:mm:ss')
                $dt = strtotime($samplesArr[$i]['date_time']);
                $samplesArr[$i]['date_time'] = date('Y-m-d H:i:s', $dt);
            }
            Samples::insert($samplesArr);
            $answer = 'Samples was add';
        }
        else {
            $err = $validator;
        }

        return[
            'err'    =>$err,
            'answer' => $answer,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function editSamples(Request $request)
    {
        $err = null;
        $answer = 'No changes applied';

        // Validator
        $validateRules = [
            'samples.*.id' => 'required|exists:samples,id',
            'samples.*.name' => 'required',
            'samples.*.series_id' => 'exists:series,id',
            'samples.*.current' => 'numeric',
            'samples.*.resistance' => 'numeric',
            'samples.*.sqr_resistance' => 'numeric',
            'samples.*.offset' => 'numeric',
            'samples.*.hall_voltage' => 'numeric',
            'samples.*.sensitive_i' => 'numeric',
            'samples.*.sensitive_v' => 'numeric',
            'samples.*.concentration' => 'numeric',
            'samples.*.resistivity' => 'numeric',
            'samples.*.mobility' => 'numeric',
            'samples.*.date_time' => 'date',
            'vunits' => 'in:V,mV,mkV,nV',
            'iunits' => 'in:A,mA,mkA,nA',
        ];
        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            // Create new array with samples data
            $samplesArr = $request->input('samples');

            for ($i = 0; $i < count($samplesArr); $i++) {
                $samplesID[$i] = $samplesArr[$i]['id'];
                unset($samplesArr[$i]['id']);

                // Recalculate unuts I and V acording to their default values in DB
                $samplesArr[$i] = $this->recalculateUnits($samplesArr[$i], $request->input('iunits'), $request->input('vunits'));

                // Transform DataTime into format which needet to MySQL (from 'dd.mm.YY hh:mm:ss to YY-mm-dd hh:mm:ss')
                $dt = strtotime($samplesArr[$i]['date_time']);
                $samplesArr[$i]['date_time'] = date('Y-m-d H:i:s', $dt);

                Samples::where('id', $samplesID[$i])->update($samplesArr[$i]);
            }

            $answer = 'Changes have been saved';
        }
        else {
            $err = $validator;
        }

        return [
            'err'    => $err,
            'answer' => $answer,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function delSamples(Request $request)
    {
        $err = null;
        $answer = 'Some samples have not been deleted';

        $samplesIDArr = $request->input('id');

        for ($i = 0; $i <count($samplesIDArr); $i++) {
            $sample = Samples::find($samplesIDArr[$i]);
            if($sample) {
                $sample->delete();
            }
            else {
                $err[] = 'Sample with ID = ' . $samplesIDArr[$i] . ' not exist';
            }
        }

        if(!$err) {
            $answer = 'All selected samples have been deleted';
        }

        return [
            'err'    => $err,
            'answer' => $answer,
        ];
    }
}