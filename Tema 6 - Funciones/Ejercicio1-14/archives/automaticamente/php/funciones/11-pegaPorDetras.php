<?php
include __DIR__ . '/../funciones/funciones.php';
function pegaPorDetras($numero, $digito)
{
    $numero = ($numero * 10) + $digito;
    return $numero;
}
