<?php
include __DIR__ . '/../funciones/funciones.php';
function pegaPorDetras($numero, $digito)
{
    $pegado = (abs($numero) * 10) + $digito;
    if ($numero < 0) {
        return -$pegado;
    } else {
        return $pegado;
    }
}
