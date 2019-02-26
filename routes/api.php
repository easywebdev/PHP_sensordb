<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Test routes
Route::get('test', 'TestController@testGET');
Route::post('test', 'TestController@testPOST');
Route::put('test', 'TestController@testPUT');
Route::delete('test', 'TestController@testDELETE');

/* Authorization */
/**
 * @api {post} /login Login and Authorization
 * @apiName Login
 * @apiGroup Authorization
 * @apiPermission anybody
 *
 * @apiParam {String} name User Name
 * @apiParam {String} password Current user password.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "name":"user1",
 *      "password":"123456"
 *  }
 *
 * @apiSuccess {String} err null
 * @apiSuccess {String} token Current User token
 * @apiSuccess {String} role User role
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "token": "54a8e47d2b6e18ea80f31e1b29dc51c9",
 *      "role": "user"
 *  }
 *
 * @apiError err Server errors array
 * @apiError token null
 * @apiError role User role
 * @apiErrorExample {json} Error-Response:
 *  {
 *      "err": [
 *          "Wrong password"
 *      ],
 *      "token": null,
 *      "role": "user"
 *  }
 */
Route::post('login', 'Authorization\AuthController@logIN');

/**
 * @api {get} /getrole Get user role
 * @apiName Get Role
 * @apiGroup Authorization
 * @apiPermission anybody
 *
 * @apiParam {String} token User token
 * @apiParamExample {json} Request-Example:
 *  {
 *      "token": "54a8e47d2b6e18ea80f31e1b29dc51c9"
 *  }
 *
 * @apiSuccess {String} err null
 * @apiSuccess {String} role User role
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "role": "user"
 *  }
 *
 * @apiError err Server errors array
 * @apiError role null
 * @apiErrorExample {json} Error-Response:
 *  {
 *      "err": [
 *          "The selected token is invalid."
 *      ],
 *      "role": null
 *  }
 */
Route::get('getrole', 'Authorization\AuthController@getRole');

/**
 * @api {get} /getusername Get user name
 * @apiName Get Name
 * @apiGroup Authorization
 * @apiPermission anybody
 *
 * @apiParam {String} token User token
 * @apiParamExample {json} Request-Example:
 *  {
 *      "token": "54a8e47d2b6e18ea80f31e1b29dc51c9"
 *  }
 *
 * @apiSuccess {String} err null
 * @apiSuccess {String} name User name
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "name": "user-1"
 *  }
 *
 * @apiError err Server errors array
 * @apiError name null
 * @apiErrorExample {json} Error-Response:
 *  {
 *      "err": [
 *          "The selected token is invalid."
 *      ],
 *      "name": null
 *  }
 */
Route::get('getusername', 'Authorization\AuthController@getUserName');

/**
 * @api {post} /resetpassword Reset User password
 * @apiName Reset password
 * @apiGroup Authorization
 * @apiPermission anybody
 *
 * @apiParam {String} token User token
 * @apiParam {String} oldpassword User old password
 * @apiParam {String} password1 User new password
 * @apiParam {String} password2 User new password confirm
 * @apiParamExample {json} Request-Example:
 *  {
 *      "token":"54a8e47d2b6e18ea80f31e1b29dc51c9",
 *      "oldpassword":"123456",
 *      "password1":"654321",
 *      "password2":"654321"
 *  }
 *
 * @apiSuccess {String} err null
 * @apiSuccess {String} token New User token
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "token": "291b8bad5193986bc6f289bbe45fb92c"
 *  }
 *
 * @apiError err Server errors array
 * @apiError token null
 * @apiErrorExample {json} Error-Response:
 *  {
 *      "err": [
 *          "The selected oldpassword is invalid."
 *      ],
 *      "token": null
 *  }
 */
Route::post('resetpassword', 'Authorization\AuthController@resetCurrentPassword');
Route::get('rootreset', 'Authorization\AuthController@rootReset');
/**/

/* Users */
Route::middleware(['root'])->group(function () {
    /**
     * @api {get} /getusers Get All Users
     * @apiName Get Users
     * @apiGroup Users
     * @apiPermission root
     *
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err Server error.
     * @apiSuccess {Object} users Return JSON array with all users without root.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "users": {
     *          "3": {"id":3,"name":"admin","password":"5b27b6e52d0f2c64c66d5dbc9e8a836b","token":"e058b73aa4377d20b56157713cfd6b78","roles_id":2,"role":"admin"},
     *          "4": {"id":4,"name":"admin1","password":"e10adc3949ba59abbe56e057f20f883e","token":"af4c236904b2069d556e33e73f2aa033","roles_id":2,"role":"admin"}
     *      }
     *
     * @apiError err Server errors array
     * @apiErrorExample {json} Error-Response:
     *  {
     *      "err": [
     *          "No Permission"
     *      ]
     *  }
     */
    Route::get('getusers', 'Users\UserController@getUsers');

    /**
     * @api {get} /getusers/:id Get User
     * @apiName Get User
     * @apiGroup Users
     * @apiPermission root
     *
     * @apiParam {Number} id User unique ID
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {Object} user User Data in JSON.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "user": {
     *          "id": 3,
     *          "name": "admin",
     *          "password": "5b27b6e52d0f2c64c66d5dbc9e8a836b",
     *          "token": "e058b73aa4377d20b56157713cfd6b78",
     *          "roles_id": 2,
     *          "role": "admin"
     *      }
     *  }
     *
     * @apiError err Server error array
     * @apiError user null
     * @apiErrorExample {json} Error-Response:
     *  {
     *      "err": [
     *          "The selected id is invalid."
     *      ]
     *      "user": null
     *  }
     */
    Route::get('getusers/{id}', 'Users\UserController@getUser');

    /**
     * @api {post} /addusers Add new User
     * @apiName Add User
     * @apiGroup Users
     * @apiPermission root
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name New User Name.
     * @apiParam {String} password Password for new user.
     * @apiParam {String} role Role for new user (user, admin).
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
     *      "name":"user4",
     *      "password":"123456",
     *      "role":"user"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} result Add user information.
     * @apiSuccessExample Success-Response:
     *     {
     *       "err": null,
     *       "result": "User add successfully"
     *     }
     *
     * @apiError err Server errors array
     * @apiError result User was not Added
     * @apiErrorExample {json} Error-Response:
     *  {
     *      "err": [
     *          "The name has already been taken."
     *      ],
     *      "result": "user not added"
     *  }
     */
    Route::post('addusers', 'Users\UserController@addUser');

    /**
     * @api {put} /editusers/:id Edit selected User
     * @apiName Edit User
     * @apiGroup Users
     * @apiPermission root
     *
     * @apiParam {Number} id User unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name New User Name.
     * @apiParam {string} password Password for new user.
     * @apiParam {String} role Role for new user (user, admin).
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
     *      "name":"user4",
     *      "password":"123456",
     *      "role":"user"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {JSON} result Edit user information.
     * @apiSuccessExample Success-Response:
     *     {
     *       "err": null,
     *       "result": "user was changed"
     *     }
     *
     * @apiError err Server errors array
     * @apiError result User data not changed
     * @apiErrorExample {json} Error-Response:
     *  {
     *      "err": [
     *          "The selected id is invalid."
     *      ],
     *      "result": "user not changed"
     *  }
     */
    Route::put('editusers/{id}', 'Users\UserController@editUser');

    /**
     * @api {delete} /delusers/:id Delete selected User
     * @apiName Delete User
     * @apiGroup Users
     * @apiPermission root
     *
     * @apiParam {Number} id User unique ID
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} result Delete user information.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "result": "user was deleted"
     *  }
     *
     * @apiError err Server errors array
     * @apiError result User wos not deleted
     * @apiErrorExample {json} Error-Response:
     *  {
     *      "err": [
     *          "user not found"
     *      ]
     *      "result": "user was not deleted"
     *  }
     */
    Route::delete('delusers/{id}', 'Users\UserController@delUser');
});
/**/

/* Manufacturers */
/**
 * @api {get} /getmanufacturers Get Manufacturers
 * @apiName Get Manufacturers
 * @apiGroup Manufacturers
 * @apiPermission All Authorised
 *
 * @apiParam {String} userToken Current user token.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
 *  }
 *
 * @apiSuccess {String} err null.
 * @apiSuccess {Object} manufacturers All manufacturers in JSON.
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "manufacturers": [
 *          {
 *              "id": 1,
 *              "name": "MEFE",
 *              "person": "Person-1"
 *          },
 *          {
*               "id": 2,
*               "name": "Ahen",
*               "person": "Person-2"
*           }
 *      ]
 *  }
 *
 * @apiError err Server errors array
 * @apiErrorExample {json} Error-Response:
 *  {
*       "err": [
*           "No Permission"
*       ]
*   }
*/
Route::get('getmanufacturers', 'Manufacturers\ManufacturersController@getManufacturers')->middleware('allauth');

Route::middleware(['rootadmin'])->group(function () {

    /**
     * @api {get} /getmanufacturers/:id Get Manufacturer
     * @apiName Get Manufacturer
     * @apiGroup Manufacturers
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Manufacturer unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {Object} manufacturer Manufacturer data in JSON.
     * @apiSuccessExample Success-Response:
     *   {
     *      "err": null,
     *      "manufacturer": {
     *          "id": 1,
     *          "name": "MEFE",
     *          "person": "Person-1"
     *      }
     *   }
     *
     * @apiError err Server errors array
     * @apiError manufacturer null
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *          "The selected id is invalid."
     *       ],
     *      "manufacturer": null
     *  }
     */
    Route::get('getmanufacturers/{id}', 'Manufacturers\ManufacturersController@getManufacturer');

    /**
     * @api {put} /editmanufacturers/:id Edit Manufacturer
     * @apiName Edit Manufacturer
     * @apiGroup Manufacturers
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Manufacturer unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name Manufacturer Name.
     * @apiParam {String} person Manufacturer contact person.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken":"8d680875a1f3b18ba7d537abb947af02",
     *      "name":"MEFE",
     *      "person":"Person-2"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Manufacturer was changed.
     * @apiSuccessExample Success-Response:
     *   {
     *      "err": null,
     *      "manufacturer": "Manufacturer was changed"
     *   }
     *
     * @apiError err Server errors array.
     * @apiError answer Manufacturer was not changed.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *          "The selected id is invalid."
     *       ],
     *      "answer": "Manufacturer not changed"
     *  }
     */
    Route::put('editmanufacturers/{id}', 'Manufacturers\ManufacturersController@editManufacturer');

    /**
     * @api {post} /addmanufacturers Add Manufacturer
     * @apiName Add Manufacturer
     * @apiGroup Manufacturers
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name Manufacturer Name.
     * @apiParam {String} person Manufacturer contact person.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken":"8d680875a1f3b18ba7d537abb947af02",
     *      "name":"MEFE",
     *      "person":"Person-2"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Manufacturer was added.
     * @apiSuccessExample Success-Response:
     *   {
     *      "err": null,
     *      "manufacturer": "Manufacturer was add"
     *   }
     *
     * @apiError err Server errors array.
     * @apiError answer Manufacturer was not add.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *          "The name field is required."
     *       ],
     *      "answer": "Manufacturer not Add"
     *  }
     */
    Route::post('addmanufacturers', 'Manufacturers\ManufacturersController@addManufacturer');

    /**
     * @api {delete} /delmanufacturers/:id Delete Manufacturer
     * @apiName Delete Manufacturer
     * @apiGroup Manufacturers
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Manufacturer unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken":"8d680875a1f3b18ba7d537abb947af02"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Manufacturer was deleted.
     * @apiSuccessExample Success-Response:
     *   {
     *      "err": null,
     *      "manufacturer": "Manufacturer was deleted"
     *   }
     *
     * @apiError err Server errors array.
     * @apiError answer Manufacturer was not deleted.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *          "Manufacturer not found"
     *       ],
     *      "answer": "Manufacturer was not deleted"
     *  }
     */
    Route::delete('delmanufacturers/{id}', 'Manufacturers\ManufacturersController@delManufacturer');
});
/**/

/* Series */
/**
 * @api {get} /getseries Get Series
 * @apiName Get Series
 * @apiGroup Series
 * @apiPermission All Authorised
 *
 * @apiParam {String} userToken Current user token.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
 *  }
 *
 * @apiSuccess {String} err null.
 * @apiSuccess {Object} series All series in JSON.
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "series": [
 *           {
 *               "id": 1,
 *               "name": "series-1",
 *               "structure": "layer-1/substrate",
 *               "thickness": 1900,
 *               "image": "image-11",
 *               "current": 20,
 *               "resistance": 150,
 *               "sensitivity": 25,
 *               "offset": 3,
 *               "material_type": "3D",
 *               "vunits": "mkV",
 *               "manufacturers_id": 1
 *           },
 *           {
 *               "id": 2,
 *               "name": "series-2",
 *               "structure": "layer-2/substrate",
 *               "thickness": 100,
 *               "image": "image-2",
 *               "current": 50,
 *               "resistance": 3,
 *               "sensitivity": 0.001,
 *               "offset": 300,
 *               "material_type": "3D",
 *               "vunits": "mkV",
 *               "manufacturers_id": 2
 *           }
 *       ]
 *  }
 *
 * @apiError err Server errors array
 * @apiErrorExample {json} Error-Response:
 *  {
 *       "err": [
 *           "No Permission"
 *       ]
 *   }
 */
Route::get('getseries', 'Series\SeriesController@getSeries')->middleware('allauth');

Route::middleware(['rootadmin'])->group(function () {
    /**
     * @api {get} /getseries/{id} Get Serie
     * @apiName Get Serie
     * @apiGroup Series
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Series unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {Object} serie Series data in JSON.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "serie":
     *           {
     *               "id": 1,
     *               "name": "series-1",
     *               "structure": "layer-1/substrate",
     *               "thickness": 1900,
     *               "image": "image-11",
     *               "current": 20,
     *               "resistance": 150,
     *               "sensitivity": 25,
     *               "offset": 3,
     *               "material_type": "3D",
     *               "vunits": "mkV",
     *               "manufacturers_id": 1
     *           }
     *  }
     *
     * @apiError err Server errors array
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The selected id is invalid."
     *       ],
     *       "serie": null
     *   }
     */
    Route::get('getseries/{id}', 'Series\SeriesController@getSerie');

    /**
     * @api {put} /editseries/{id} Edit Serie
     * @apiName Edit Serie
     * @apiGroup Series
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Series unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name Serie name.
     * @apiParam {String} structure Serie layers structure.
     * @apiParam {Double} thickness Sensitive layer thickness.
     * @apiParam {String} image Immage path.
     * @apiParam {Double} current Typical current for samples in this serie.
     * @apiParam {Double} resistance Typical resistance for samples in this serie.
     * @apiParam {Double} sencitivity Typical sencitivity for samples in this serie.
     * @apiParam {Double} offset Typical offset for samples in this serie.
     * @apiParam {Enum} material_type Type of sensitive layer may be "2D" or "3D".
     * @apiParam {Enum} vunits Voltage units for this serie. May be "V", "mV", "mkV", "nV"
     * @apiParam {Number} manufacturers_id Manufacturer id for this serie.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
     *      "name": "series-1",
     *      "structure": "layer-1/substrate",
     *      "thickness": 1900,
     *      "image": "image-11",
     *      "current": 20,
     *      "resistance": 150,
     *      "sensitivity": 25,
     *      "offset": 3,
     *      "material_type": "3D",
     *      "vunits": "mkV",
     *      "manufacturers_id": 1
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Series was changed.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Serie was changed"
     *  }
     *
     * @apiError err Server errors array
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The selected material type is invalid.",
     *           "The selected vunits is invalid."
     *       ],
     *       "answer": "Serie was not changed"
     *   }
     */
    Route::put('editseries/{id}', 'Series\SeriesController@editSerie');

    /**
     * @api {post} /addseries Add Serie
     * @apiName Add Serie
     * @apiGroup Series
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name Serie name.
     * @apiParam {String} structure Serie layers structure.
     * @apiParam {Double} thickness Sensitive layer thickness.
     * @apiParam {String} image Immage path.
     * @apiParam {Double} current Typical current for samples in this serie.
     * @apiParam {Double} resistance Typical resistance for samples in this serie.
     * @apiParam {Double} sencitivity Typical sencitivity for samples in this serie.
     * @apiParam {Double} offset Typical offset for samples in this serie.
     * @apiParam {Enum} material_type Type of sensitive layer may be "2D" or "3D".
     * @apiParam {Enum} vunits Voltage units for this serie. May be "V", "mV", "mkV", "nV"
     * @apiParam {Number} manufacturers_id Manufacturer id for this serie.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
     *      "name": "series-1",
     *      "structure": "layer-1/substrate",
     *      "thickness": 1900,
     *      "image": "image-11",
     *      "current": 20,
     *      "resistance": 150,
     *      "sensitivity": 25,
     *      "offset": 3,
     *      "material_type": "3D",
     *      "vunits": "mkV",
     *      "manufacturers_id": 1
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Serie was added.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Serie was added"
     *  }
     *
     * @apiError err Server errors array
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The name has already been taken.",
     *           "The selected vunits is invalid."
     *       ],
     *       "answer": "Serie was not added"
     *   }
     */
    Route::post('addseries', 'Series\SeriesController@addSerie');

    /**
     * @api {post} /delseries/{id} Delete Serie
     * @apiName Del Serie
     * @apiGroup Series
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Series unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Serie was deleted.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Serie was deleted"
     *  }
     *
     * @apiError err Server errors array
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "Wrong ID"
     *       ],
     *       "answer": "Serie was not deleted"
     *   }
     */
    Route::delete('delseries/{id}', 'Series\SeriesController@delSerie');
});
/**/

/* Additional Routs */
// No Permission Page
Route::get('NoPermission', function () { return ['err' => ['No Permission']]; });
/**/
