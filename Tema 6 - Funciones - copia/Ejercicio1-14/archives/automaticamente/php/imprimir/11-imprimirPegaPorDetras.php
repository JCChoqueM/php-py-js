<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirPegaPorDetras($input1, $input2)
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
            if ($input2 < 0) {
                $mensajeError .= "El campo 2 no puede ser negativo.<br>";
            }
            if ($nDigito > 1) {
                $mensajeError .= "El campo 2 no puede tener más de 1 dígito.";
            }
            $mensajeError .= "</span>";
            break;
        case "10":
            $mensajeError = "El campo 2 está vacío.";
            break;
        case "11":
            if ($input2 >= 0 && $nDigito == 1) {
                $mensajeError .= "<span $centrar>";
                $mensajeError .= "<span $morado>$input1</span> con <span $naranja>$input2</span> pegado por detras:<br>";
                $mensajeError .= "<span $verde>";
                if ($input1 == 0) {
                    $mensajeError .= "<span $negro>Numeral:</span>  " . pegaPorDetras($input1, $input2);
                    $mensajeError .= "<br><span $negro>Literal:</span>  $input1$input2";
                } else {
                    $mensajeError .=  pegaPorDetras($input1, $input2);
                }
                $mensajeError .= "</span>";
                $mensajeError .= "</span>";
            } else {
                $mensajeError .= "<span $rojo>";
                if ($nDigito > 1) {
                    $mensajeError .= "El campo 2 no puede tener más de 1 dígito.<br>";
                }
                if ($input2 < 0) {
                    $mensajeError .= "El campo 2 no puede ser negativo:<span $negro> $input1$input2</span>";
                }

                $mensajeError .= "</span>";
            }


            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
