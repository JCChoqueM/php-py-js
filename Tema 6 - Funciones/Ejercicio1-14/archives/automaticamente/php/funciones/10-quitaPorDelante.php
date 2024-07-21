<?php
include __DIR__ . '/../funciones/funciones.php';
function quitaPorDelante($numero, $digito)
{
    $numero = abs($numero);
    $calculo = (digitos($numero)) - $digito;
    $nuevoNumero = ($numero % potencia(10, $calculo));
    return $nuevoNumero;
}
