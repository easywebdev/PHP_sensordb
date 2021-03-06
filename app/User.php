<?php
/**
 * Created by PhpStorm.
 * User: fedor
 * Date: 20.11.2018
 * Time: 11:38
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'password',
        'token',
        'roles_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function role() {
        return $this->belongsTo('App\Role', 'roles_id');
    }
}