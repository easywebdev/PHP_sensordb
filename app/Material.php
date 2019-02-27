<?php
/**
 * Created by PhpStorm.
 * User: fedor
 * Date: 26.02.2019
 * Time: 12:13
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Material extends Model
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
}