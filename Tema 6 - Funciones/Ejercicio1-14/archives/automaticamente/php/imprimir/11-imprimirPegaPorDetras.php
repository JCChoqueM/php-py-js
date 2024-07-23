<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirPegaPorDetras($input1, $input2)
{

    $centrar = "style='text-align: center;'";
    $rojo = "style='color: red;'";
    $verde = "style='color: darkgreen;'";
    $mensajeError = "";
    $estado = (!is_numeric($input1) ? "0" : "1") . (!is_numeric($input2) ? "0" : "1");

    switch ($estado) {
        case "00":
            $mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
            break;
        case "01":
            $mensajeError = "El campo 1 está vacío.";
            break;
        case "10":
            $mensajeError = "El campo 2 está vacío.";
            break;
        case "11":

            $input1 = intval($input1);
            $input2 = intval($input2);

            if ($input2 < 0) {
                $mensajeError = "No se puede pegar un numero negativo por detras:<span $rojo>$input1$input2.</span> ";
            }else{
                
            }

            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
