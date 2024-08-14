<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirGenerarArrayInt($input1)
{
    $mensajeError = "";
    if (is_array($input1)) {

        $mensajeError = "El array Generado es:";
        $mensajeError .= crearTabla($input1, -1, -1);
    } else {
        echo "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}
