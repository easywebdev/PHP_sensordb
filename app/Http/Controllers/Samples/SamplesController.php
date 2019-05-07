<?php

namespace App\Http\Controllers\Samples;

use App\Samples;
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
        $materialsID = $request->input('materials_id');
        $manufacturersID = $request->input('manufacturers_id');
        $seriesID = $request->input('series_id');
        $DateTime = $request->input('DateTime');
        $findItem = $request->input('findvalue');
        $itemCount = $request->input('itemCount');

        // Conditional clauses DB request
        $samples = Samples::when($manufacturersID, function ($query, $manufacturersID) {
            return $query->whereIn('manufacturers_id', $manufacturersID);
        })->when($materialsID, function ($query, $materialsID){
            return $query->whereIn('materials_id', $materialsID);
        })->when($seriesID, function ($query, $seriesID) {
            return $query->whereIn('series_id', $seriesID);
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
//        for ($i = 0; $i < count($samples); $i++) {
//            $samples[$i]['series_name'] = Samples::find($samples[$i]['id'])->serie['name'];
//            $samples[$i]['material_name'] = Samples::find($samples[$i]['id'])->material['name'];
//            $samples[$i]['manufacturer_name'] = Samples::find($samples[$i]['id'])->manufacturer['name'];
//        }

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
            'samples.*.materials_id' => 'exists:materials,id',
            'samples.*.manufacturers_id' => 'exists:manufacturers,id',
            'samples.*.series_id' => 'exists:series,id',
        ];
        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            Samples::insert($request->input('samples'));
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
            'samples.*.materials_id' => 'exists:materials,id',
            'samples.*.manufacturers_id' => 'exists:manufacturers,id',
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
                $samplesArr[$i] = $this->recalculateUnits($samplesArr[$i], $request->input('iunits'), $request->input('vunits'));
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
        $answer = ' Some samples have not been deleted';

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