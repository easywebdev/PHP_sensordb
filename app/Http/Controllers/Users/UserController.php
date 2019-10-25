<?php

namespace App\Http\Controllers\Users;


use App\Http\Controllers\Controller;
use App\Role;
use App\Tasks\MyValidator;
use App\Tasks\Roles;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use MyValidator;
    use Roles;

    /**
     * @return array
     */
    public function getUsers()
    {
        $err = null;
        $usersArr = null;

        $users = User::where('name', '!=', 'root')->get();

        $i = 0;
        foreach ($users as $user) {
            $role = Role::find($user->roles_id);
            $usersArr[$i] = $user->toArray();
            $usersArr[$i]['role'] = $role->name;
            $i++;
        }

        return [
            'err'   => $err,
            'users' => $usersArr,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function getUser(Request $request)
    {
        $err = null;
        $userArr = null;

        $postData = ['id' => $request->route('id')];
        $validateRules = ['id' => 'exists:users'];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $user = User::find($request->route('id'));
            $userArr = $user->toArray();
            $role = $this->findRoleName($user->token);
            $userArr['role'] = $role;
        }
        else {
            $err = $validator;
        }

        return [
            'err'  => $err,
            'user' => $userArr,
        ];
    }

    /**
     * @param Request $request
     * @return array
     */
    public function addUser(Request $request)
    {
        $err = null;
        $answer = 'user not added';

        // validation
        $validateRules = [
            'name' => 'required|unique:users,name',
            'password' => 'required|min:6',
            'role' => 'required|in:admin,user'
        ];
        $validator = $this->validateData($request->input(), $validateRules);

        if(!$validator) {
            $postData = $request->input();
            $postData['password'] = md5($postData['password']);
            $postData['roles_id'] = $this->findRoleIDbyName($postData['role']);

            $user = User::create($postData);
            $user->token = md5($user->id . $user->password);
            $user->save();

            $answer = 'User add successfully';
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
    public function editUser(Request $request)
    {
        $err = null;
        $answer = 'user not changed';

        // validation
        $postData = $request->input();
        $postData['id'] = $request->route('id');
        $validateRules = [
            'name' => 'required|unique:users,name,' . $request->route('id'),
            'password' => 'required|min:6',
            'role' => 'required|in:admin,user',
            'id' => 'required|exists:users,id'
        ];
        $validator = $this->validateData($postData, $validateRules);

        if(!$validator) {
            $user = User::find($request->route('id'));

            $user->name = $request->input('name');
            $user->password = md5($request->input('password'));
            $user->roles_id = $this->findRoleIDbyName($request->input('role'));
            $user->token = md5($user->id . $user->password);
            $user->save();

            $answer = 'user was changed';
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
    public function delUser(Request $request)
    {
        $err = null;
        $answer = 'user was not deleted';

        $user = User::find($request->route('id'));

        if($user) {
            $user->delete();
            $answer = 'user was deleted';
        }
        else {
            $err[] = 'user not found';
        }

        return [
            'err'    => $err,
            'answer' => $answer,
        ];
    }
}