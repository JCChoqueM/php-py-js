<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirDigitos($input1)
{
    $rojo = "style='color: red;'";
    $verde = "style='color: darkgreen;'";
    $mensajeError = "";
    $estado = !is_numeric($input1) ? "0" : "1";
    switch ($estado) {
        case "0":
            $mensajeError = "El campo está vacío o no es un número. Por favor, ingrese número(s).";
            break;
        case "1":
            $input1 = (int)$input1; // Asegurarse de que $input1 es un entero
            $color = $input1 >= 0 ? $verde : $rojo;
            $mensajeError = "<span>";
            if ($input1 >= 0) {
                $mensajeError .= "El número: <span $color>$input1</span>.<br>
        tiene: <span $color>" . digitos($input1) . " digitos</span>";
            } else {
                $mensajeError .= "El número: <span $color>$input1</span>.<br>
        tiene: <span $color>" . digitos(($input1)) . " digitos</span>";
            }
            $mensajeError .= "</span>";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }
    return "$mensajeError";
}
