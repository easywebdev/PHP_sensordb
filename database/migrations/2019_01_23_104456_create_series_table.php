<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSeriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('series', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('structure');
            $table->decimal('thickness');
            $table->string('image');
            $table->decimal('current');
            $table->decimal('resistance');
            $table->decimal('sensitivity');
            $table->decimal('offset');
            $table->integer('manufacturers_id')->unsigned();

            $table->foreign('manufacturers_id')->references('id')->on('manufacturers')
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
        Schema::dropIfExists('series');
    }
}
