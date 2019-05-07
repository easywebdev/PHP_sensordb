<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class Samples extends Model
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
        'current',
        'resistance',
        'sqr_resistance',
        'offset',
        'hall_voltage',
        'sensitive_i',
        'sensitive_v',
        'concentration',
        'resistivity',
        'mobility',
        'date_time',
        'noties',
        'materials_id',
        'manufacturers_id',
        'series_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function serie() {
        return $this->belongsTo('App\Series', 'series_id', 'id');
    }

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