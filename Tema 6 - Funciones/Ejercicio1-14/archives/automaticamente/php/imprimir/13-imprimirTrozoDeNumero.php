<?php
include __DIR__ . '/../funciones/funciones.php';

function imprimirTrozoDeNumero($valor, $valor2, $valor3)
{
    $centrar = "style='text-align: center;'";
    // Contar los dígitos del valor
    $digitos = strlen((string)$valor) - 1;

    $mensajeError = "";
    // Verificar si el valor tiene la longitud adecuada
    $estado =
        (!is_numeric($valor) ? "0" : "1") .
        (!is_numeric($valor2) ? "0" : "1") .
        (!is_numeric($valor3) ? "0" : "1");

    $estado2 =
        ($valor2 < 0 ? "N" : ($valor2 > $digitos ? "F" : "I")) .
        ($valor3 < 0 ? "N" : ($valor3 > $digitos ? "F" : "I"));

    switch ($estado) {
        case "000":
            $mensajeError = "Por favor, ingrese números en todos los campos.";
            break;
        case "100":
            $mensajeError = "Llene los campos 2 y 3.";
            break;
        case "010":
            $mensajeError = "Llene los campos 1 y 3.";
            break;
        case "001":
            $mensajeError = "Llene los campos 1 y 2.";
            break;
        case "011":
            $mensajeError = "Llene el campo 1.";
            break;
        case "101":
            $mensajeError = "Llene el campo 2.";
            break;
        case "110":
            $mensajeError = "Llene el campo 3.";
            break;
        case "111":
            $mensajeError .= "<span $centrar>";
            $mensajeError .= crearTablaTrozo(abs($valor), 0);
            switch ($estado2) {
                case "NN":
                    $mensajeError .= "input2 e input 3 no pueden ser negativos";
                    break;
                case "NI":
                    $mensajeError .= "input2 no puede ser negativo";
                    break;
                case "IN":
                    $mensajeError .= "input3 no puede ser negativo";
                    break;
                case "FI":
                    $mensajeError .= "El campo 2 no está en el rango.";
                    break;
                case "IF":
                    $mensajeError .= "El campo 3 no está en el rango.";
                    break;
                case "FF":
                    $mensajeError .= "El campo 2 y 3 no están en el rango permitido.";
                    break;
                case "FN":
                    $mensajeError .= "El campo 2 no está en el rango y input3 no puede ser negativo.";
                    break;
                case "NF":
                    $mensajeError .= "input2 no puede ser negativo y el campo 3 no está en el rango.";
                    break;
                case "II":
                    if ($valor2 >= 0 && $valor2 <= $digitos) {
                        if ($valor3 >= $valor2 && $valor3 <= $digitos) {
                            $mensajeError = "<span $centrar>";
                            $mensajeError .= crearTablaTrozo(abs($valor), 0, $valor2, $valor3);
                            $mensajeError .= "</span>";
                        } else {
                            $mensajeError .= "input2 no puede ser mayor que input3";
                        }
                    }
                    break;
                default:
                    $mensajeError = "revisame algo paso";
            }
            $mensajeError .= "</span>";
            break;
    }

    return $mensajeError;
}
