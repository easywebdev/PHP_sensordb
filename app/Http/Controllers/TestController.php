<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class TestController extends Controller
{
    private $arrData = [
        'a' => 1,
        'b' => 2,
        'c' => 3,
    ];

    /**
     * @param Request $request
     * @return array
     */
    public function testGET(Request $request)
    {
        //echo 'Test Responce';

        $jsonData = json_encode($this->arrData); // Not needs, becose Laravel convert array to JSON automaticly

        $this->arrData['a'] = $request->a . $this->arrData['a'];

        return $this->arrData;
    }


    /**
     * @param Request $request
     * @return array
     */
    public function testPOST(Request $request)
    {
        $jsonData = $request->post('a');

        //echo $request->post('a');
        //echo $request->method();
        //print_r($request->header());

        $answerData = [
            'Method' => $request->method(),
            'Answer' => 'I have got ' . $jsonData,
        ];

        return $answerData;
    }

    /**
     * @param Request $request
     * @return array
     */
    public function testPUT(Request $request)
    {
        $jsonData = $request->input('a');

        //echo $request->post('a');
        //echo $request->method();

        $answerData = [
            'Method' => $request->method(),
            'Answer' => 'I have got ' . $jsonData,
        ];

        return $answerData;
    }

    /**
     * @param Request $request
     * @return array
     */
    public function testDELETE(Request $request)
    {
        $itemID = $request->input('id');

        $answerData = [
            'Method' => $request->method(),
            'Answer' => $itemID,
        ];

        return $answerData;
    }
}