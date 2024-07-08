<?php

function quitaPorDetras($numero, $digito)
{
    $numero = abs($numero);
    $nuevoNumero = intdiv($numero, potencia(10, $digito));
    return $nuevoNumero;
}
