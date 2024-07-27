<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirJuntaNumeros($input1, $input2)
{
    $centrar = "style='text-align: center;'";
    $rojo = "style='color: red;'";
    $verde = "style='color: darkgreen;'";
    $negro = "style='color: black;'";
    $morado = "style='color: purple;'";
    $naranja = "style='color: brown'";
    $mensajeError = "";
    $estado = (!is_numeric($input1) ? "0" : "1") . (!is_numeric($input2) ? "0" : "1");

    $input1 = intval($input1);
    $input2 = intval($input2);
    $nDigito = digitos(intval($input2));
    $estado2 =
        ($input1 == 0 ? "C" : ($input1 > 0 ? "P" : "N")) .
        ($input2 == 0 ? "C" : ($input2 > 0 ? "P" : "N"));
    switch ($estado) {
        case "00":
            $mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
            break;
        case "01":
            $mensajeError = "El campo 1 está vacío.<br>";
            break;
        case "10":
            $mensajeError = "El campo 2 está vacío.";
            break;
        case "11":
            $mensajeError .= "<span $centrar>";
            $mensajeError .= "El pegado de los numeros <span $morado>$input1</span> y <span $naranja>$input2</span> es:<br>";
            switch ($estado2) {
                case "CC":
                    $mensajeError .= "00";
                    break;
                case "CP":
                    $mensajeError .= "01";
                    break;
                case "PC":
                    $mensajeError .= "Final ($input2) no puede ser negativo";
                    break;
                case "CN":
                    $mensajeError .= "Inicial ($input1) no puede ser mayor que ($input2)";
                    break;
                case "NC":
                    $mensajeError .= "Final ($input2) no puede ser mayor que ($input2)";
                    break;
                case "PP":
                    $mensajeError .= "Inicial ($input1) y Final ($input2) no puede ser mayor que ($input2)";
                    break;
                case "PN":
                    $mensajeError .= "Inicial ($input1) no puede ser mayor que ($input2) y Final ($input2) no puede ser negativo.";
                    break;
                case "NN":
                    $mensajeError .= "inicial ($input1) no puede ser negativo y Final ($input2) no puede ser mayor que ($input2).";
                    break;
                case "NP":
                    if ($input1 >= 0 && $input1 <= $input2) {
                        if ($input2 >= $input1 && $input2 <= $input2) {
                            $mensajeError = "<span $centrar>";
                            $mensajeError .= crearTablaTrozo(abs($input1), 0, $input1, $input2);
                            $mensajeError .= trozoDeNumero($input1, $input1, $input2);
                            $mensajeError .= "</span>";
                        } else {
                            $mensajeError .= "Inicial ($input1) no puede ser mayor que Final ($input2)";
                        }
                    } else {
                        $mensajeError .= "Inicial ($input1) no está en el rango permitido.(revisar...)";
                    }
                    break;
                default:
                    $mensajeError = "revisame algo paso";
            }

            $mensajeError .= "</span>";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
