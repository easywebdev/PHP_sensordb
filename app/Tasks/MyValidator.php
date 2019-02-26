<?php

namespace App\Tasks;

use Validator;

trait MyValidator
{
    /**
     * @param array $data
     * @param array $rules
     * @return null
     */
    public function validateData(array $data, array $rules)
    {
        $err = null;

        $validator = Validator::make($data, $rules);

        if($validator->fails()) {
            foreach (json_decode($validator->messages()) as $msg) {
                $err[] = $msg[0];
            }
        }

        return $err;
    }
}