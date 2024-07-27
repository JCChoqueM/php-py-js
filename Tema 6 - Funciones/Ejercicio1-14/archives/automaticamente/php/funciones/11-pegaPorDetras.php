<?php
include __DIR__ . '/../funciones/funciones.php';
function pegaPorDetras($numero, $numero2)
{
    $exponente = digitos($numero2);
    $pegado = (abs($numero) * potencia(10, $exponente)) + abs($numero2);
    if ($numero < 0) {
        return -$pegado;
    } else {
        return $pegado;
    }
}
