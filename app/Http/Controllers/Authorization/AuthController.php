<?php
namespace App\Http\Controllers\Authorization;

use App\Http\Controllers\Controller;
use App\Tasks\MyValidator;
use App\Tasks\Roles;
use App\Tasks\Users;
use App\User;
use Illuminate\Http\Request;
use Validator;

class AuthController extends Controller
{
    use Roles;
    use Users;
    use MyValidator;

    /**
     * @param Request $request
     * @return array
     */
    public function logIN(Request $request)
    {
        $err = null;
        $name = null;
        $password = null;
        $token = null;
        $role = null;

        $users = User::where('name', $request->input('name'))->get();

        foreach ($users as $item) {
            $name = $item->name;
            $password = $item->password;
            $token = $item->token;
        }

        if($token) {
            $role = $this->findRoleName($token);
        }

        if($name) {
            if($password != md5($request->input('password'))) {
                $token = null;
                $err[] = "Wrong password";
            }
        }
        else {
            $err[] = 'User ' . $request->input('name') . ' not exist';
        }

        return [
          'err'   => $err,
          'token' => $token,
          'role'  => $role,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getRole(Request $request)
    {
        $err = null;
        $role = null;

        // Validate
        $validateRules = [
            'token' => 'required|exists:users,token'
        ];

        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            $role = $this->findRoleName($request->input('token'));
        }
        else {
            $err = $validator;
        }

        return [
            'err'  => $err,
            'role' => $role,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getUserName(Request $request)
    {
        $err = null;
        $name = null;

        // Validate
        $validateRules = [
            'token' => 'required|exists:users,token'
        ];

        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            $name = User::where('token', $request->input('token'))->value('name');
        }
        else {
            $err = $validator;
        }

        return [
            'err'  => $err,
            'name' => $name,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function resetCurrentPassword(Request $request)
    {
        $err = null;
        $token = null;

        $userID = User::where('token', $request->input('token'))->value('id');
        $user = User::find($userID);

        if($user) {
            // Validate
            $postData = $request->all();
            $postData['oldpassword'] = md5($postData['oldpassword']);

            $validateRules = [
                'password2'   => 'same:password1',
                'password1'   => 'required|min:6',
                'oldpassword' => 'required|in:' . $user->password,
            ];

            $validator = $this->validateData($postData, $validateRules);

            if($validator) {
                $err = $validator;
            }
            else {
                $token = $this->resetPassword($user->id, $request->input('password1'));
            }
        }
        else {
            $err[] = 'Wrong token';
        }

        return [
            'err'   => $err,
            'token' => $token,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function rootReset(Request $request)
    {
        $err = null;
        $token = null;

        // validate data
        $validateRules = [
            'password' => 'required|min:6',
            'kod'      => 'required|in:Kid1367548%',
        ];

        $validator = $this->validateData($request->all(), $validateRules);

        if($validator) {
            $err = $validator;
        }
        else {
            $userID = User::where('name', 'root')->value('id');
            $token = $this->resetPassword($userID, $request->password);
        }

        return [
            'err'   => $err,
            'token' => $token,
        ];
    }
}