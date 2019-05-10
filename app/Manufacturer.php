<?php
/**
 * Created by PhpStorm.
 * User: fedor
 * Date: 24.01.2019
 * Time: 13:58
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Manufacturer extends Model
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
        'person',
    ];

    public function series() {
        return $this->hasMany('App\Series', 'manufacturers_id', 'id');
    }
}