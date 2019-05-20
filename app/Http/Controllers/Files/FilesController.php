<?php

namespace App\Http\Controllers\Files;

use App\Tasks\MyValidator;
use Illuminate\Http\Request;

class FilesController
{
    use MyValidator;

    /**
     * @param Request $request
     * @return array
     */
    public function addFile(Request $request)
    {
        $err = null;
        $imagePath = null;
        $answer = 'File have not been uploaded';

        $validateRules = [
            'image' => 'required|image|max:2000',
        ];
        $validator = $this->validateData($request->file(), $validateRules);

        if(!$validator) {
            $file = $request->file('image');
            $file->move('uploads/', $file->getClientOriginalName());
            $imagePath = 'uploads/' . $file->getClientOriginalName();
            $answer = 'File have been uploaded successfully';
        }
        else {
            $err = $validator;
        }

        return [
            'err'    => $err,
            'image'  => $imagePath,
            'answer' => $answer
        ];
    }

    public function delFile(Request $request)
    {
        $err = null;
        $answer = 'Fire have not been deleted';

        $delfile = $request->input('filename');
        if(file_exists($delfile)) {
            unlink($delfile);
            $answer = 'File have been deleted';
        }
        else {
            $err[] = 'File does not exist';
        }

        return [
            'err'    => $err,
            'answer' => $answer,
        ];
    }
}