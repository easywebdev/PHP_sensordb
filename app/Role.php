<?php
/**
 * Created by PhpStorm.
 * User: fedor
 * Date: 21.11.2018
 * Time: 13:26
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Role extends Model
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
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users() {
        return $this->hasMany('App\User', 'roles_id');
    }
}