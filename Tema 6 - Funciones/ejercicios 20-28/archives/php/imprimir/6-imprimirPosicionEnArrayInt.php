<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirPosicionEnArrayInt($input1)
{
    $mensajeError = "";
    if (is_array($input1)) {

        $mensajeError = "El valor minimo del array es: " . minimoArrayInt($input1);
        $mensajeError .= crearTabla($input1, -1, minimoArrayInt($input1));
    } else {
        echo "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}