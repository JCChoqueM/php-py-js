<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirVoltea($input1)
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
            $voltea = voltea(abs($input1));
            var_dump($voltea);
            $color = $input1 >= 0 ? $verde : $rojo;
            $mensajeError = "<span>";
            if ($input1 >= 0) {
                $mensajeError .= "Numero Ingresado: <span $color>$input1</span>.<br>
        volteado literal: <span $color>" . $voltea[0] . "</span><br>volteado numeral: <span $color>" . $voltea[1] . "</span>";
            } else {
                $mensajeError .= "Numero Ingresado: <span $color>$input1</span>.<br>
        volteado literal: <span $color>" . $voltea[0] . "</span><br>volteado numeral: <span $color>" . $voltea[1] . "</span>";
            }
            $mensajeError .= "</span>";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }
    return "$mensajeError";
}
