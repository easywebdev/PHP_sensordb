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
        'iunits',
        'manufacturers_id',
        'materials_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function material() {
        return $this->belongsTo('App\Material', 'materials_id', 'id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function manufacturer() {
        return $this->belongsTo('App\Manufacturer', 'manufacturers_id', 'id');
    }
}