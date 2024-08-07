<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirQuitaPorDelante($input1, $input2)
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
            $nDigito = digitos(intval($input1));
            $input1 = intval($input1);
            $input2 = intval($input2);
            $digitoS = ($input2 == 1 ? "dígito" : "dígitos");
            $mensajeError = "<div $centrar>";
            $mensajeError .= "El número $input1 tiene <span $verde>$nDigito $digitoS.</span> <br>";
            $mensajeError .= crearTabla(abs($input1), 1);
            if ($input2 == 0) {
                $mensajeError .= "<span $rojo>Quitar $input2 dígitos nos dara el mismo numero $input1</span><br>";
                $mensajeError .= crearTabla(abs($input1), 1);
            } elseif ($input2 > $nDigito) {
                $mensajeError .= "<span $rojo>No se puede quitar $input2 dígitos por Delante</span>";
            } elseif ($input2 < 0) {
                $mensajeError .= "<span $rojo>La cantidad de números a quitar no puede ser negativa</span>";
            } elseif ($input2 == $nDigito) {
                $mensajeError .= "<span $rojo>Quitar $input2 dígitos resultará en 0</span>";
            } else {
                $mensajeError .= "<span $verde>el numero $input1 menos $input2 $digitoS es: " . quitaPorDelante($input1, $input2) . ".</span>";
                $mensajeError .= crearTabla((quitaPorDelante($input1, $input2)), 1);
            }
            $mensajeError .= "</div>";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
