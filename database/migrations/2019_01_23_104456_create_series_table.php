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
            $table->string('structure')->nullable();
            $table->double('thickness')->nullable();
            $table->string('image');
            $table->double('current')->nullable();
            $table->double('resistance')->nullable();
            $table->double('sensitivity')->nullable();
            $table->double('offset')->nullable();
            $table->enum('material_type', ['3D', '2D']);
            $table->enum('vunits', ['V', 'mV', 'mkV', 'nV']);
            $table->enum('iunits', ['A', 'mA', 'mkA', 'nA']);
            $table->integer('manufacturers_id')->unsigned();
            $table->integer('materials_id')->unsigned();

            $table->foreign('manufacturers_id')->references('id')->on('manufacturers')
                                                            ->onDelete('cascade')
                                                            ->onUpdate('cascade');

            $table->foreign('materials_id')->references('id')->on('materials')
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
