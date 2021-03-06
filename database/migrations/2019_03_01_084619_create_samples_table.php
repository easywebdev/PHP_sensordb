<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSamplesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('samples', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->double('current');
            $table->double('resistance');
            $table->double('sqr_resistance');
            $table->double('offset');
            $table->double('hall_voltage');
            $table->double('sensitive_i');
            $table->double('sensitive_v');
            $table->double('concentration');
            $table->double('resistivity');
            $table->double('mobility');
            $table->timestamp('date_time')->nullable();
            $table->string('noties')->nullable();
            $table->integer('series_id')->unsigned();

            $table->foreign('series_id')->references('id')->on('series')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('samples');
    }
}
