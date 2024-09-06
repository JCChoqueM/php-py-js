<?php
// app/includes/archivo2.php
function posicionEnArrayInt($input1, $extra)
{

    $posiciones = [];
    if (is_array($input1)) {
        foreach ($input1 as $indice => $valor) {
            if ($valor == $extra) {
                $posiciones[] = $indice;
            }
        }
    } else {
        echo "El primer parámetro no es un array.";
    }

    return $posiciones;
}