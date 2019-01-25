<?php

namespace App\Http\Controllers\Manufacturers;


use App\Manufacturer;
use App\Tasks\MyValidator;
use Illuminate\Http\Request;

class ManufacturersController
{
    use MyValidator;

    /**
     * @return array
     */
    public function getManufacturers()
    {
        $err = null;
        $manufacturers = null;

        $manufacturers = Manufacturer::all()->toArray();

        return [
            'err'           => $err,
            'manufacturers' => $manufacturers,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getManufacturer(Request $request)
    {
        $err = null;
        $manufacturer = null;

        $postData = ['id' => $request->route('id')];
        $validateRules = ['id' => 'exists:manufacturers,id'];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $manufacturer = Manufacturer::find($request->route('id'))->toArray();
        }
        else {
            $err = $validator;
        }

        return [
            'err'          => $err,
            'manufacturer' => $manufacturer,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function editManufacturer(Request $request)
    {
        $err = null;
        $answer = 'Manufacturer not changed';

        $postData = $request->input();
        $postData['id'] = $request->route('id');
        $validateRules = [
            'name' => 'required',
            'id' => 'exists:manufacturers,id',
        ];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $manufacturer = Manufacturer::find($postData['id']);
            $manufacturer->name = $postData['name'];
            $manufacturer->person = $postData['person'];
            $manufacturer->save();

            $answer = 'Manufacturer was changed';
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
    public function addManufacturer(Request $request)
    {
        $err = null;
        $answer = 'Manufacturer was not added';

        $validateRules = [
            'name' => 'required',
        ];
        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            $manufacturer = Manufacturer::create($request->input());
            $manufacturer->save();

            $answer = 'Manufacturer was added';
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
    public function delManufacturer(Request $request)
    {
        $err = null;
        $answer = 'Manufacturer was not deleted';

        $manufacturer = Manufacturer::find($request->route('id'));

        if($manufacturer) {
            $manufacturer->delete();
            $answer = 'Manufacturer was deleted';
        }
        else {
            $err[] = 'Manufacturer not found';
        }

        return [
            'err'    => $err,
            'answer' => $answer,
        ];
    }
}