<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirEsPrimo($input1)
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
            $color = $esPrimoAbs ? $verde : $rojo;
            $mensajeError = "<span>";
            if ($input1 > 1) {
                $mensajeError .= "El número <span $color>{$input1}</span>" . ($esPrimo ? " es primo" : " NO es primo");
            } else {
                $mensajeError .= "En matemáticas, un número primo es un número natural mayor que <span $verde>1</span>, el número <span $rojo>{$input1}</span> no es primo.";
                if ($input1 != 0 && $input1 != 1) {
                    $mensajeError .= "<br><br><span $color>Ignorando el signo:</span><br>";
                    $mensajeError .= "El número <span $color>{$absInput1}</span>" . ($esPrimoAbs ? " es primo" : " NO es primo");
                }
            }
            $mensajeError .= "</span>";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }
    return "$mensajeError";
}
