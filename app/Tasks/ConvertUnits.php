<?php
/**
 * Created by PhpStorm.
 * User: fedor
 * Date: 07.05.2019
 * Time: 11:43
 */

namespace App\Tasks;


use App\Series;

trait ConvertUnits
{
    /**
     * @param array $sampleData
     * @param string $iunits
     * @param string $vunits
     * @return array
     */
    public function recalculateUnits(array $sampleData, string $iunits, string $vunits)
    {
        $serieUnits = Series::find($sampleData['series_id'], ['iunits', 'vunits']);

        // Convert I to Ci
        switch ($iunits) {
            case 'mA':
                $KIci = 1E-3;
                break;
            case  'mkA':
                $KIci = 1E-6;
                break;
            case 'nA':
                $KIci = 1E-9;
                break;
            default:
                $KIci = 1;
        }

        // Convert V to Ci
        switch ($vunits) {
            case 'mV':
                $KVci = 1E-3;
                break;
            case  'mkV':
                $KVci = 1E-6;
                break;
            case 'nV':
                $KVci = 1E-9;
                break;
            default:
                $KVci = 1;
        }

        // Convert I to Serie Units
        switch ($serieUnits->iunits) {
            case 'mA':
                $KIserie = 1E3;
                break;
            case  'mkA':
                $KIserie = 1E6;
                break;
            case 'nA':
                $KIserie = 1E9;
                break;
            default:
                $KIserie = 1;
        }

        // Convert V to Serie Units
        switch ($serieUnits->vunits) {
            case 'mV':
                $KVserie = 1E3;
                break;
            case  'mkV':
                $KVserie = 1E6;
                break;
            case 'nV':
                $KVserie = 1E9;
                break;
            default:
                $KVserie = 1;
        }

        $sampleData['current'] = $sampleData['current'] * $KIci * $KIserie;
        $sampleData['offset'] = $sampleData['offset'] * $KVci * $KVserie;
        $sampleData['hall_voltage'] = $sampleData['hall_voltage'] * $KVci * $KVserie;

        //print_r($sampleData);
        return $sampleData;
    }
}