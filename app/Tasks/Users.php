<?php


namespace App\Tasks;


use App\User;

trait Users
{
    /**
     * @param int $userID
     * @param string $password
     * @return string
     */
    public function resetPassword(int $userID, string $password)
    {
        if($userID) {
            $user = User::find($userID);
            $user->password = md5($password);
            $user->token = md5($user->id . $password);
            $user->save();

            return $user->token;
        }
    }
}