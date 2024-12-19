<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function digitoN($numero, $posicion)
{
    $digitos_numero = digitos($numero);
    $exponente = $digitos_numero - $posicion - 1;
    $primero = intdiv($numero, (potencia(10, $exponente)));
    $segundo = ($primero % 10);
    return $segundo;
}
