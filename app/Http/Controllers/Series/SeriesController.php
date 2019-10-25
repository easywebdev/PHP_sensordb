<?php

namespace App\Http\Controllers\Series;

use App\Http\Controllers\Controller;
use App\Series;
use App\Tasks\MyValidator;
use Illuminate\Http\Request;

class SeriesController extends Controller
{
    use MyValidator;

    /**
     * @return array
     */
    public function getSeries()
    {
        $err = null;
        $series = null;

        $series = Series::all()->toArray();

        // Add names
        for($i = 0; $i < count($series); $i++) {
            $serie = Series::find($series[$i]['id']);
            $series[$i]['material_name'] = $serie->material['name'];
            $series[$i]['manufacturer_name'] = $serie->manufacturer['name'];
        }

        return [
            'err'    => $err,
            'series' => $series,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getSerie(Request $request)
    {
        $err = null;
        $serie = null;

        $postData = ['id' => $request->route('id')];
        $validateRules = ['id' => 'exists:series,id'];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $serie = Series::find($request->route('id'))->toArray();
        }
        else {
            $err = $validator;
        }

        return [
            'err'   => $err,
            'serie' => $serie,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function editSerie(Request $request)
    {
        $err = null;
        $answer = 'Serie was not changed';

        $postData = $request->input();
        $postData['id'] = $request->route('id');
        $validateRules = [
            'name' => 'required|unique:series,name,' . $request->route('id'),
            'thickness' => 'numeric',
            'current' => 'numeric',
            'resistance' => 'numeric',
            'sensitivity' => 'numeric',
            'offset' => 'numeric',
            'material_type' => 'in:3D,2D',
            'image' => 'required',
            'vunits' => 'in:V,mV,mkV,nV',
            'iunits' => 'in:A,mA,mkA,nA',
            'manufacturers_id' => 'exists:manufacturers,id',
            'materials_id' => 'exists:materials,id',
            'id' => 'exists:series,id',
        ];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $serie = Series::find($postData['id']);
            $serie->name = $postData['name'];
            $serie->structure = $postData['structure'];
            $serie->thickness = $postData['thickness'];
            $serie->image = $postData['image'];
            $serie->current = $postData['current'];
            $serie->resistance = $postData['resistance'];
            $serie->sensitivity = $postData['sensitivity'];
            $serie->offset = $postData['offset'];
            $serie->vunits = $postData['vunits'];
            $serie->iunits = $postData['iunits'];
            $serie->material_type = $postData['material_type'];
            $serie->manufacturers_id = $postData['manufacturers_id'];
            $serie->materials_id = $postData['materials_id'];
            $serie->save();

            $answer = 'Serie was changed';
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
    public function addSerie(Request $request)
    {
        $err = null;
        $answer = 'Serie was not added';

        $validateRules = [
            'name' => 'required|unique:series,name,',
            'thickness' => 'numeric',
            'current' => 'numeric',
            'resistance' => 'numeric',
            'sensitivity' => 'numeric',
            'offset' => 'numeric',
            'material_type' => 'in:3D,2D',
            'image' => 'required',
            'vunits' => 'in:V,mV,mkV,nV',
            'iunits' => 'in:A,mA,mkA,nA',
            'manufacturers_id' => 'exists:manufacturers,id',
            'materials_id' => 'exists:materials,id',
        ];
        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            $serie = Series::create($request->input());
            $serie->save();

            $answer = 'Serie was added';
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
    public function delSerie(Request $request)
    {
        $err = null;
        $answer = 'Serie was not deleted';

        $serie = Series::find($request->route('id'));

        if($serie) {
            $serie->delete();
            $answer = 'Serie was deleted';
        }
        else {
            $err[] = 'Wrong ID';
        }

        return [
            'err'    => $err,
            'answer' => $answer,
        ];
    }
}