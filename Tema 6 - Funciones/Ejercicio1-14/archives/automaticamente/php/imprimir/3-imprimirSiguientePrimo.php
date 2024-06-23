<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirSiguientePrimo($input1)
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
            $absInput1 = abs($input1);
            $esPrimo = esPrimo($input1);
            $esPrimoAbs = esPrimo($absInput1);
            $color = $input1 >= 0 ? $verde : $rojo;
            $mensajeError = "<span>";
            if ($input1 > 1) {
                $mensajeError .= "El número ingresado es: <span $verde>$input1</span>.<br>
        El siguiente número primo es: <span $verde>".siguientePrimo($input1)."</span>";
            } else {
                $mensajeError .= "El número ingresado es: <span $color>$input1</span>.<br>
        Por definición, el siguiente número primo es: <span $verde>2</span>.";
            }
            $mensajeError .= "</span>";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }
    return "$mensajeError";
}
