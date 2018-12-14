<?php

namespace App\Tasks;

use App\Role;
use App\User;

trait Roles
{
    /**
     * @param string $token
     * @return mixed
     */
    public function findRoleName(string $token)
    {
        $rolesID = User::where('token', $token)->value('roles_id');

        if($rolesID) {
            return Role::where('id', $rolesID)->value('name');
        }
    }

    /**
     * @param string $name
     * @return int
     */
    public function findRoleIDbyName(string $name) : int
    {
        return Role::where('name', $name)->value('id');
    }
}