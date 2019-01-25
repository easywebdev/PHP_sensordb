<?php

namespace App\Http\Middleware;

use App\Tasks\MyValidator;
use Closure;
use Illuminate\Http\Request;

class AllAuth
{
    use MyValidator;

    public function handle(Request $request, Closure $next)
    {
        if($request->input('userToken')) {

            $validateRules = ['userToken' => 'exists:users,token'];
            $validator = $this->validateData($request->input(), $validateRules);

            if(!$validator) {
                return $next($request);
            }
            else {
                return redirect('api\NoPermission');
            }
        }
        else {
            return redirect('api\NoPermission');
        }
    }
}