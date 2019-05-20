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
 *               "manufacturers_id": 1,
 *               "materials_id": 1
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
 *               "manufacturers_id": 2,
 *               "materials_id": 1
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
     *               "manufacturers_id": 1,
     *               "materials_id": 1
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
     *      "manufacturers_id": 1,
     *      "materials_id": 1
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
     *      "manufacturers_id": 1,
     *      "materials_id": 1
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

/* Materials */
/**
 * @api {get} /getmaterials Get Materials
 * @apiName Get Materials
 * @apiGroup Materials
 * @apiPermission All Authorised
 *
 * @apiParam {String} userToken Current user token.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
 *  }
 *
 * @apiSuccess {String} err null.
 * @apiSuccess {Object} series All materials in JSON.
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "materials": [
 *           {
 *               "id": 1,
 *               "name": "InSb"
 *           },
 *           {
 *               "id": 2,
 *               "name": "InAs"
 *           }
 *       ]
 *  }
 *
 * @apiError {Array} err Server errors array
 * @apiErrorExample {json} Error-Response:
 *  {
 *       "err": [
 *           "No Permission"
 *       ]
 *   }
 */
Route::get('getmaterials', 'Materials\MaterialsController@getMaterials')->middleware('allauth');

Route::middleware(['rootadmin'])->group(function () {
    /**
     * @api {get} /getmaterials/{id} Get Material
     * @apiName Get Material
     * @apiGroup Materials
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Materials unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {Object} Material parameters in JSON.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "material":
     *           {
     *               "id": 1,
     *               "name": "InSb"
     *           }
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} material null
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The selected id is invalid."
     *       ],
     *       "material": null
     *   }
     */
    Route::get('getmaterials/{id}', 'Materials\MaterialsController@getMaterial');

    /**
     * @api {put} /editmaterials/{id} Edit Material
     * @apiName Edit Material
     * @apiGroup Materials
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Materials unique ID.
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name Unique material name.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
     *      "name":"InSb"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Material was changed.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Material was changed"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} answer Material was not changed.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The name has already been taken."
     *       ],
     *       "answer": "Material was not changed"
     *   }
     */
    Route::put('editmaterials/{id}', 'Materials\MaterialsController@editMaterial');

    /**
     * @api {post} /addmaterials Add Material
     * @apiName Add Material
     * @apiGroup Materials
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} name Unique material name.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
     *      "name":"InSb"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Material was added.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Material was added"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} answer Material was not added.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The name has already been taken."
     *       ],
     *       "answer": "Material was not added"
     *   }
     */
    Route::post('addmaterials', 'Materials\MaterialsController@addMaterial');

    /**
     * @api {delete} /delmaterials/{id} Delete Material
     * @apiName Del Material
     * @apiGroup Materials
     * @apiPermission root, admin
     *
     * @apiParam {Number} id Unique materials id.
     * @apiParam {String} userToken Current user token.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Material was deleted.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Material was deleted"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} answer Material was not deleted.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "Wrong ID"
     *       ],
     *       "answer": "Material was not deleted"
     *   }
     */
    Route::delete('delmaterials/{id}', 'Materials\MaterialsController@delMaterial');
});
/**/

/* Samples */
/**
 * @api {get} /getsamples?page={page} Get Samples
 * @apiName Get Samples
 * @apiGroup Samples
 * @apiPermission All Authorised
 *
 * @apiParam {Number} page Page number for paginate For first page can be '/getsamples'.
 * @apiParam {String} userToken Current user token.
 * @apiParam {Array} materials_id Materials unique ID.
 * @apiParam {Array} manufacturers_id Manufacturers unique ID.
 * @apiParam {Array} series_id Series unique ID.
 * @apiParam {String} DateTime Sample measure time.
 * @apiParam {String} findvalue Find text by Name or Note.
 * @apiParam {Number} itemCount Find text by Name or Note.
 * @apiParam {String} order_by Order samples by: 'Name', 'R', 'SI', 'n', 'ρ', 'μ', 'DateTime'.
 * @apiParam {String} order Order samples direct or inverce: 'asc', 'desc'.
 * @apiParamExample {json} Request-Example:
 *  {
 *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
 *      "materials_id":[3,2],
 *      "manufacturers_id":[1,2],
 *      "series_id":[1,2],
 *      "DateTime":"2019-05-12 15:45:00",
 *      "findvalue":"some note",
 *      "itemCount":5,
 *      "order_by":"name",
 *      "order":"asc"
 *  }
 *
 * @apiSuccess {String} err null.
 * @apiSuccess {Object} samples All samples with paginate and paginate data.
 * @apiSuccess {Array} data All samples data.
 * @apiSuccess {Number} current_page Current paginate page.
 * @apiSuccess {String} first_page_url First page URL.
 * @apiSuccess {Number} from From paginate page.
 * @apiSuccess {Number} last_page Last paginate page.
 * @apiSuccess {String} last_page_url Last page URL.
 * @apiSuccess {String} next_page_url Last page URL.
 * @apiSuccess {String} path Main path page URL.
 * @apiSuccess {Number} per_page Samples per page.
 * @apiSuccess {String} prev_page_url Previous page URL.
 * @apiSuccess {Number} to To paginate page.
 * @apiSuccess {Number} total Total Samples count.
 * @apiSuccessExample Success-Response:
 *  {
 *      "err": null,
 *      "samples": {
 *          "current_page": 1,
 *          "data": [
 *          {
 *              "id": 2,
 *              "name": "name-2",
 *              "current": 10400.000000000004,
 *              "resistance": 50.4,
 *              "sqr_resistance": 30.4,
 *              "offset": 2400,
 *              "hall_voltage": 3400,
 *              "sensitive_i": 12.4,
 *              "sensitive_v": 8.4,
 *              "concentration": 540000000000000000,
 *              "resistivity": 0.324,
 *              "mobility": 20000.4,
 *              "date_time": "2000-01-01 00:00:00",
 *              "noties": "noty",
 *              "series_id": 2,
 *              "iunits": "mkA",
 *              "vunits": "mkV",
 *              "series_name": "series-2",
 *              "material_name": "InAs",
 *              "manufacturer_name": "ACHEN"
 *          },
 *          {
 *              "id": 4,
 *              "name": "name-4",
 *              "current": 10,
 *              "resistance": 50,
 *              "sqr_resistance": 30,
 *              "offset": 199.99999999999991,
 *              "hall_voltage": 300,
 *              "sensitive_i": 12,
 *              "sensitive_v": 8,
 *              "concentration": 500000000000000000,
 *              "resistivity": 0.32,
 *              "mobility": 20000,
 *              "date_time": "2000-01-01 00:00:00",
 *              "noties": "noty",
 *              "series_id": 2,
 *              "iunits": "mkA",
 *              "vunits": "mkV",
 *              "series_name": "series-2",
 *              "material_name": "InAs",
 *              "manufacturer_name": "ACHEN"
 *          },
 *          {
 *              "id": 6,
 *              "name": "name-6",
 *              "current": 10,
 *              "resistance": 50,
 *              "sqr_resistance": 30,
 *              "offset": 200,
 *              "hall_voltage": 300,
 *              "sensitive_i": 12,
 *              "sensitive_v": 8,
 *              "concentration": 500000000000000000,
 *              "resistivity": 0.32,
 *              "mobility": 20000,
 *              "date_time": "2000-01-01 00:00:00",
 *              "noties": "noty",
 *              "series_id": 2,
 *              "iunits": "mkA",
 *              "vunits": "mkV",
 *              "series_name": "series-2",
 *              "material_name": "InAs",
 *              "manufacturer_name": "ACHEN"
 *          }
 *          ],
 *          "first_page_url": "http://sensordb.loc/api/getsamples?page=1",
 *          "from": 1,
 *          "last_page": 1,
 *          "last_page_url": "http://sensordb.loc/api/getsamples?page=1",
 *          "next_page_url": null,
 *          "path": "http://sensordb.loc/api/getsamples",
 *          "per_page": 5,
 *          "prev_page_url": null,
 *          "to": 3,
 *          "total": 3
 *      }
 *  }
 *
 * @apiError {Array} err Server errors array
 * @apiErrorExample {json} Error-Response:
 *  {
 *       "err": [
 *           "No Permission"
 *       ]
 *   }
 */
Route::get('getsamples', 'Samples\SamplesController@getSamples')->middleware('allauth');

Route::middleware(['rootadmin'])->group(function () {
    /**
     * @api {post} /addsamples Add Samples
     * @apiName Add Samples
     * @apiGroup Samples
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} iunits Current Units: 'nA', 'mkA', 'mA', 'A'.
     * @apiParam {String} vunits Voltage Units: 'nV', 'mkV', 'mV', 'V'.
     * @apiParam {Array} samples Array of JSON ogjects.
     * @apiParam {String} name Sensor name.
     * @apiParam {Float} current Sensor current.
     * @apiParam {Float} resistance Sensor resistance.
     * @apiParam {Float} sqr_resistance Sensor surface resistance.
     * @apiParam {Float} offset Sensor offset voltage.
     * @apiParam {Float} hall_voltage Sensor Hall voltage.
     * @apiParam {Float} sensitive_i Sensor Sencitivity at current source.
     * @apiParam {Float} sensitive_v Sensor Sencitivity at voltage source.
     * @apiParam {Float} concentration Sensor charge carrier concentration.
     * @apiParam {Float} resistivity Sensor resistivity.
     * @apiParam {Float} mobility Sensor mobility.
     * @apiParam {String} date_time Sensor measure Date Time.
     * @apiParam {String} noties Sensor measure Notes.
     * @apiParam {Number} series_id Sensor Series ID.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken":"3fb024e46e221b100b3b948be1c5eb79",
     *      "iunits":"mA",
     *      "vunits":"mV",
     *      "samples":[
     *      {
     *          "name":"name-7",
     *          "current":10,
     *          "resistance":50,
     *          "sqr_resistance":30,
     *          "offset":2,
     *          "hall_voltage":3,
     *          "sensitive_i": 12,
     *          "sensitive_v":8,
     *          "concentration":5E17,
     *          "resistivity": 0.32,
     *          "mobility": 20000,
     *          "date_time":"2000-01-01 00:00:00",
     *          "noties":"noty",
     *          "series_id":3
     *      },
     *      {
     *          "name":"name-8",
     *          "current":0.01,
     *          "resistance":50,
     *          "sqr_resistance":30,
     *          "offset":0.2,
     *          "hall_voltage":0.3,
     *          "sensitive_i": 12,
     *          "sensitive_v":8,
     *          "concentration":5E17,
     *          "resistivity": 0.32,
     *          "mobility": 20000,
     *          "date_time":"2000-01-01 00:00:00",
     *          "noties":"noty",
     *          "series_id":3
     *      }
     *      ]
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Information about add Sensors.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Samples was add"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} answer Sensors was not added.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The selected iunits is invalid.",
     *           "The samples.1.current must be a number."
     *       ],
     *       "answer": "Samples was not added"
     *   }
     */
    Route::post('addsamples', 'Samples\SamplesController@addSamples');

    /**
     * @api {put} /editsamples Edit Samples
     * @apiName Edit Samples
     * @apiGroup Samples
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} iunits Current Units: 'nA', 'mkA', 'mA', 'A'.
     * @apiParam {String} vunits Voltage Units: 'nV', 'mkV', 'mV', 'V'.
     * @apiParam {Array} samples Array of JSON ogjects.
     * @apiParam {Number} id Sensor unique ID.
     * @apiParam {String} name Sensor name.
     * @apiParam {Float} current Sensor current.
     * @apiParam {Float} resistance Sensor resistance.
     * @apiParam {Float} sqr_resistance Sensor surface resistance.
     * @apiParam {Float} offset Sensor offset voltage.
     * @apiParam {Float} hall_voltage Sensor Hall voltage.
     * @apiParam {Float} sensitive_i Sensor Sencitivity at current source.
     * @apiParam {Float} sensitive_v Sensor Sencitivity at voltage source.
     * @apiParam {Float} concentration Sensor charge carrier concentration.
     * @apiParam {Float} resistivity Sensor resistivity.
     * @apiParam {Float} mobility Sensor mobility.
     * @apiParam {String} date_time Sensor measure Date Time.
     * @apiParam {String} noties Sensor measure Notes.
     * @apiParam {Number} series_id Sensor Series ID.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken":"3fb024e46e221b100b3b948be1c5eb79",
     *      "iunits":"mA",
     *      "vunits":"mV",
     *      "samples":[
     *      {
     *          "id":1,
     *          "name":"name-7",
     *          "current":10,
     *          "resistance":50,
     *          "sqr_resistance":30,
     *          "offset":2,
     *          "hall_voltage":3,
     *          "sensitive_i": 12,
     *          "sensitive_v":8,
     *          "concentration":5E17,
     *          "resistivity": 0.32,
     *          "mobility": 20000,
     *          "date_time":"2000-01-01 00:00:00",
     *          "noties":"noty",
     *          "series_id":3
     *      },
     *      {
     *          "id":2,
     *          "name":"name-8",
     *          "current":0.01,
     *          "resistance":50,
     *          "sqr_resistance":30,
     *          "offset":0.2,
     *          "hall_voltage":0.3,
     *          "sensitive_i": 12,
     *          "sensitive_v":8,
     *          "concentration":5E17,
     *          "resistivity": 0.32,
     *          "mobility": 20000,
     *          "date_time":"2000-01-01 00:00:00",
     *          "noties":"noty",
     *          "series_id":3
     *      }
     *      ]
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer Information about edit Sensors data.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "Changes have been saved"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} answer No changes applied.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The selected samples.0.id is invalid.",
     *           "The samples.1.current must be a number."
     *       ],
     *       "answer": "No changes applied"
     *   }
     */
    Route::put('editsamples', 'Samples\SamplesController@editSamples');

    /**
     * @api {delete} /delsamples Del Samples
     * @apiName Del Samples
     * @apiGroup Samples
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {Array} id Array of unique sensors id.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken" : "af4c236904b2069d556e33e73f2aa033",
     *      "id":[49, 50]
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer All selected samples have been deleted.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "All selected samples have been deleted"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} answer Material was not deleted.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "Sample with ID = 11 not exist",
     *           "Sample with ID = 12 not exist"
     *       ],
     *       "answer": "Some samples have not been deleted"
     *   }
     */
    Route::delete('delsamples', 'Samples\SamplesController@delSamples');
});
/**/

/* Upload Files */
Route::middleware(['rootadmin'])->group(function () {
    /**
     * @api {post} /addfile Add File
     * @apiName Add file
     * @apiGroup Files
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {file} image Input type="file" .
     * @apiParamExample {json} Request-Example:
     *  <input type="file">
     *  <input type="hidden" value = "af4c236904b2069d556e33e73f2aa033">
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} image Relative file path.
     * @apiSuccess {String} answer File have been uploaded successfully.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "image": "uploads/general-purpose_application.png",
     *      "answer": "File have been uploaded successfully"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiSuccess {String} image null.
     * @apiError {String} answer File have not been uploaded.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "The image field is required."
     *       ],
     *       "image": null,
     *       "answer": "File have not been uploaded"
     *   }
     */
    Route::post('addfile', 'Files\FilesController@addFile');

    /**
     * @api {delete} /delfile Del File
     * @apiName Del file
     * @apiGroup Files
     * @apiPermission root, admin
     *
     * @apiParam {String} userToken Current user token.
     * @apiParam {String} filename Relative file path.
     * @apiParamExample {json} Request-Example:
     *  {
     *      "userToken":"af4c236904b2069d556e33e73f2aa033",
     *      "filename":"uploads/general-purpose_application.png"
     *  }
     *
     * @apiSuccess {String} err null.
     * @apiSuccess {String} answer File have been deleted.
     * @apiSuccessExample Success-Response:
     *  {
     *      "err": null,
     *      "answer": "File have been deleted"
     *  }
     *
     * @apiError {Array} err Server errors array
     * @apiError {String} answer Fire have not been deleted.
     * @apiErrorExample {json} Error-Response:
     *  {
     *       "err": [
     *           "File does not exist"
     *       ],
     *       "answer": "Fire have not been deleted"
     *   }
     */
    Route::delete('delfile', 'Files\FilesController@delFile');
});

/**/

/* Additional Routs */
// No Permission Page
Route::get('NoPermission', function () { return ['err' => ['No Permission']]; });
/**/
