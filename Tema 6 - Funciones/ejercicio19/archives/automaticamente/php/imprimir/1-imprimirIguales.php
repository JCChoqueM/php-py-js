<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirIguales($numero, $base, $destino)
{
    $mensajeError = "";
    $estado = !is_numeric($numero) ? "0" : "1";
    switch ($estado) {
        case "0":
            $mensajeError
                = "El campo está vacío o no es un número. Por favor, ingrese número(s).";
            break;
        case "1":
            $mensajeError
                = "El numero: $numero $base <br>Es igual a: $numero $destino";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
