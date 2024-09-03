<?php
// app/includes/archivo2.php

function rotaDerechaArrayInt($array,$n)
{
    if (empty($array)) {
        return $array;
    }

    // Calcula el número de rotaciones necesarias
    $n = $n % count($array);

    // Si $n es 0, no se requiere rotación
    if ($n === 0) {
        return $array;
    }

    // Extrae las partes del array y las combina en el orden deseado
    $part1 = array_splice($array, -$n); // Últimos $n elementos
    $part2 = array_splice($array, 0); // Elementos restantes

    // Devuelve el array rotado
    return array_merge($part1, $part2);
}
