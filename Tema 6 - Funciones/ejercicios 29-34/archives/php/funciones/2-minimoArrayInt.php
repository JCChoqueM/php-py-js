<?php
function minimoArrayInt($array)
{
    $minimo = $array[0]; // Inicializa el mínimo con el primer valor del array

    foreach ($array as $valor) {
        if ($valor < $minimo) {
            $minimo = $valor;
        }
    }

    return $minimo;
}
