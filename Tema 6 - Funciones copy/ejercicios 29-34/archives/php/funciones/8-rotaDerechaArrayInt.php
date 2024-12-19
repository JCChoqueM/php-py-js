<?php
// app/includes/archivo2.php

function rotaDerechaArrayInt($input1, $extra)
{
    if (empty($input1)) {
        return [$input1, 0]; // Retorna el array vacío y posición 0
    }

    // Calcula el número de rotaciones necesarias
    $extra = $extra % count($input1);

    // Si $extra es 0, no se requiere rotación
    if ($extra === 0) {
        return [$input1, 0]; // Retorna el array original y posición 0
    }

    // Extrae las partes del input1 y las combina en el orden deseado
    $part1 = array_splice($input1, -$extra); // Últimos $extra elementos
    $part2 = array_splice($input1, 0); // Elementos restantes

    // Calcula la nueva posición del elemento que estaba en el índice 0
    $nuevaPosicion = $extra;

    // Devuelve el array rotado y la nueva posición del primer elemento original
    return [array_merge($part1, $part2), $nuevaPosicion];
}
