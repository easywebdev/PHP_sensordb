<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Series extends Model
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
        'structure',
        'thickness',
        'image',
        'current',
        'resistance',
        'sensitivity',
        'offset',
        'material_type',
        'vunits',
        'manufacturers_id',
    ];
}