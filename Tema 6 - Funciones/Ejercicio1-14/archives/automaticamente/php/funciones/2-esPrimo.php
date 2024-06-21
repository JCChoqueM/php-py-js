<?php
// app/includes/archivo2.php

function esPrimo($numero)
{

    if ($numero <= 1) {
        return false;
    }
    // Iterar desde 2 hasta la raíz cuadrada del número
    // Si el número es divisible por algún otro número, no es primo
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i === 0) {
            return false;
        }
    }
    // Si no se encontraron divisores, el número es primo
    return true;
    // Un número menor o igual a 1 no es primo
}
