<?php

namespace App\Http\Controllers\Materials;

use App\Http\Controllers\Controller;
use App\Material;
use App\Tasks\MyValidator;
use Illuminate\Http\Request;

class MaterialsController extends Controller
{
    use MyValidator;

    /**
     * @return array
     */
    public function getMaterials()
    {
        $err = null;
        $materials = null;

        $materials = Material::all()->toArray();

        return[
            'err'       => $err,
            'materials' => $materials,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getMaterial(Request $request)
    {
        $err = null;
        $material = null;

        $postData = ['id' => $request->route('id')];
        $validateRules = ['id' => 'exists:materials,id'];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $material = Material::find($request->route('id'))->toArray();
        }
        else {
            $err = $validator;
        }

        return[
            'err'      => $err,
            'material' => $material,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function editMaterial(Request $request)
    {
        $err = null;
        $answer = 'Material was not changed';

        $postData = $request->input();
        $postData['id'] = $request->route('id');
        $validateRules = [
            'name' => 'required|unique:materials,name,' . $request->route('id'),
            'id'   => 'exists:materials,id',
        ];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $material = Material::find($postData['id']);
            $material->name = $postData['name'];
            $material->save();

            $answer = 'Material was changed';
        }
        else {
            $err = $validator;
        }

        return[
            'err'    => $err,
            'answer' => $answer,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function addMaterial(Request $request)
    {
        $err = null;
        $answer = 'Material was not added';

        $validateRules = [
            'name' => 'required||unique:materials,name,',
        ];
        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            $material = Material::create($request->input());
            $material->save();

            $answer = 'Material was added';
        }
        else {
            $err = $validator;
        }

        return[
            'err'    => $err,
            'answer' => $answer,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function delMaterial(Request $request)
    {
        $err = null;
        $answer = 'Material was not deleted';

        $material = Material::find($request->route('id'));

        if($material) {
            $material->delete();
            $answer = 'Material was deleted';
        }
        else {
            $err[] = 'Wrong ID';
        }

        return[
            'err'    => $err,
            'answer' => $answer
        ];
    }
}