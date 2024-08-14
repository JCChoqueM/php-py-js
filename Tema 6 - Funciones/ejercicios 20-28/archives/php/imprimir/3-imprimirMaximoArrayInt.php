<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirMaximoArrayInt($input1)
{
    $mensajeError = "";
    if (is_array($input1)) {

        $mensajeError = "El valor maximo del array es: " . maximoArrayInt($input1);
        $mensajeError .= crearTabla($input1, -1, maximoArrayInt($input1));
    } else {
        echo "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}
