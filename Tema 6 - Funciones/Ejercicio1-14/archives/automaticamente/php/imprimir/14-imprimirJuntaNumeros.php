<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirJuntaNumeros($input1, $input2)
{
    $centrar = "style='text-align: center;'";
    $rojo = "style='color: red;'";
    $azul = "style='color: blue;'";

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
            $pegado1 = "";
            $pegado2 = "";
            $mensajeError = "<span $centrar>";
            $mensajeError .= "El pegado de los numeros <span $rojo>$input1</span> y <span $azul>$input2</span> es:<br>";
            switch ($estado2) {
                case "CC":
                    $pegado1 = "Literal: " . color($input1, 1) . color($input2, 2);
                    $pegado1 .= "<br>Numeral: 0";
                    $pegado2 = "Literal: " . color($input2, 2) . color($input1, 1);
                    $pegado2 .= "<br>Numeral: 0";
                    break;
                case "CP":
                    $pegado1 = "Literal: " . color($input1, 1) . color($input2, 2);
                    $pegado1 .= "<br>Numeral: " . pegaPorDetras($input1, $input2);
                    $pegado2 = "Literal: " . color($input2, 2) . color($input1, 1);
                    $pegado2 .= "<br>Numeral: " . pegaPorDelante($input1, $input2);
                    break;
                case "PC":
                    $pegado1 = "Literal: " . color($input1, 1) . color($input2, 2);
                    $pegado1 .= "<br>Numeral: " . pegaPorDetras($input1, $input2);
                    $pegado2 = "Literal: " . color($input2, 2) . color($input1, 1);
                    $pegado2 .= "<br>Numeral: " . pegaPorDelante($input1, $input2);
                    break;
                case "CN":
                    $pegado1 = "Literal: " . color($input1, 1) . color($input2, 2);
                    $pegado1 .= "<br>Literal: " . color("-", 2) . color($input1, 1) . color(abs($input2), 2);
                    $pegado1 .= "<br>Numeral: -" . pegaPorDetras($input1, $input2);
                    $pegado2 = "Literal: " . color($input2, 2) . color($input1, 1);
                    $pegado2 .= "<br>Numeral: " . pegaPorDelante($input1, $input2);
                    break;
                case "NC":
                    $pegado1 = "Literal: " . color($input1, 1) . color($input2, 2);
                    $pegado1 .= "<br>Numeral: " . pegaPorDetras($input1, $input2);
                    $pegado2 = "Literal: " . color($input2, 1) . color($input1, 1);
                    $pegado2 .= "<br>Literal: " . color("-", 1) . color($input2, 2) . color(abs($input1), 1);
                    $pegado2 .= "<br>Numeral: -" . pegaPorDelante($input1, $input2);
                    break;
                case "PP":
                    $pegado1 = "Literal: " . color($input1, 1) . color($input2, 2);
                    $pegado1 .= "<br>Numeral: " . pegaPorDetras($input1, $input2);
                    $pegado2 = "Literal: " . color($input2, 2) . color($input1, 1);
                    $pegado2 .= "<br>Numeral: " . pegaPorDelante($input1, $input2);
                    break;
                case "PN":
                    $mensajeError .= "Inicial ($input1) no puede ser mayor que ($input2) y Final ($input2) no puede ser negativo.";
                    break;
                case "NN":
                    $mensajeError .= "inicial ($input1) no puede ser negativo y Final ($input2) no puede ser mayor que ($input2).";
                    break;
                case "NP":

                    break;
                default:
                    $mensajeError = "revisame algo paso";
            }
            $mensajeError .= crearTablaPegado($pegado1, $pegado2);
            $mensajeError .= "</span>";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }


    return $mensajeError;
}

function color($numero, $mn)
{
    $naranja = "style='color: red;'";
    $morado = "style='color: blue;'";
    $style = $mn == 1 ? $naranja : $morado;
    return "<span $style>$numero</span>";
}
