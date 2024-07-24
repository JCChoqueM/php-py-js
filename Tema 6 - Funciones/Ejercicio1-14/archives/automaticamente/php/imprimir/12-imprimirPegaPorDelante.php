<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirPegaPorDelante($input1, $input2)
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
    switch ($estado) {
        case "00":
            $mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
            break;
        case "01":
            $mensajeError = "El campo 1 está vacío.<br>";
            $mensajeError .= "<span $rojo>";
            if ($nDigito > 1) {
                $mensajeError .= "El campo 2 no puede tener más de 1 dígito.";
            }
            $mensajeError .= "</span>";
            break;
        case "10":
            $mensajeError = "El campo 2 está vacío.";
            break;
        case "11":
            if ($nDigito == 1) {
                $mensajeError .= "<span $centrar>";
                $mensajeError .= "<span $morado>$input1</span> con <span $naranja>$input2</span> pegado por detras:<br>";
                $mensajeError .= "<span $verde>";
                if ($input1 < 0) {
                } else {
                    if ($input1 == 0) {
                        $mensajeError .= "<span $negro>Numeral:</span>  " . pegaPorDelante($input1, $input2);
                        $mensajeError .= "<br><span $negro>Literal:</span>  $input1$input2";
                    } else {
                        $mensajeError .=  pegaPorDelante($input1, $input2);
                    }
                }
                $mensajeError .= "</span>";
                $mensajeError .= "</span>";
            } else {
                $mensajeError .= "<span $rojo>";
                if ($nDigito > 1) {
                    $mensajeError .= "El campo 2 no puede tener más de 1 dígito.<br>";
                }
                $mensajeError .= "</span>";
            }


            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
