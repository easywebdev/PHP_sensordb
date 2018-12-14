<?php

namespace App\Http\Middleware;

use App\Tasks\Roles;
use Closure;
use Illuminate\Http\Request;


class Root
{
    use Roles;

    public function handle(Request $request, Closure $next)
    {
        $role = '';

        if($request->input('userToken')) {
            $role = $this->findRoleName($request->input('userToken'));
        }

        if($role != 'root') {
            return redirect('api\NoPermission');
        }

        return $next($request);
    }
}