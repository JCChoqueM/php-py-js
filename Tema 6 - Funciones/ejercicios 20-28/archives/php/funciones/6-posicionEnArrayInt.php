<?php
// app/includes/archivo2.php

function posicionEnArrayInt($array)
{
    $maximo = $array[0]; // Inicializa el mínimo con el primer valor del array

    foreach ($array as $valor) {
        if ($valor > $maximo) {
            $maximo = $valor;
        }
    }

    return $maximo;
}
