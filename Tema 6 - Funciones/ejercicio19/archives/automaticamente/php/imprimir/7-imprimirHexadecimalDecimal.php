<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirHexadecimalDecimal($numero, $base, $destino)
{
    $mensajeError = "";

    $estado = validarNumero($numero, $base) ? "1" : "0";
    switch ($estado) {
        case "0":
            $mensajeError = ($numero == "") ? "El campo está vacío" : "$numero no es $base.";
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
