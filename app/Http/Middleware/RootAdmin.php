<?php

namespace App\Http\Middleware;


use App\Tasks\Roles;
use Closure;
use Illuminate\Http\Request;

class RootAdmin
{
    use Roles;

    public function handle(Request $request, Closure $next)
    {
        $role = '';

        if($request->input('userToken')) {
            $role = $this->findRoleName($request->input('userToken'));
        }

        if($role == 'root' || $role == 'admin') {
            return $next($request);
        }
        else {
            return redirect('api\NoPermission');
        }
    }
}