<?php
include __DIR__ . '/../funciones/funciones.php';
function pegaPorDelante($numero, $numero2)
{
    $aux = digitos($numero);
    $pegado = (abs($numero2) * potencia(10, $aux)) + abs($numero);
    if ($numero2 < 0) {
        return -$pegado;
    } else {
        return $pegado;
    }
}
