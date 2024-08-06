<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirBinarioOctal($numero, $base, $destino)
{
    $mensajeError = "";

    $estado = validarNumero($numero, $base) ? "1" : "0";
    switch ($estado) {
        case "0":
            if ($numero == "") {
                $mensajeError
                    = "El campo está vacío";
            } else {
                $mensajeError
                    = "$numero no es una base valida.";
            }
            break;
        case "1":
            $mensajeError
                = "El numero: $numero $base <br>Es igual a: " . DecimalOctal(BinarioDecimal($numero)) . " $destino";

            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }


    return $mensajeError;
}
