<?php
function mediaArrayInt($array)
{
    // Verifica si el array no está vacío
    if (empty($array)) {
        return 0; // Retorna 0 si el array está vacío
    }

    // Suma todos los elementos del array
    $suma = array_sum($array);

    // Calcula el número de elementos en el array
    $numeroDeElementos = count($array);

    // Calcula la media
    $media = $suma / $numeroDeElementos;

    // Formatea la media a 2 decimales
    return number_format($media, 2);
}
