<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirPotencia($base, $exponente)
{
    $centrar = "style='text-align: center;'";
    $rojo = "style='color: red;'";
    $verde = "style='color: darkgreen;'";
    $letra = "style='font-size: 20px; font-weight: bold'";

    $mensajeError = "";
    $estado = (is_numeric($base) ? "1" : "0") . (is_numeric($exponente) ? "1" : "0");

    switch ($estado) {
        case "00":
            $mensajeError = "Ambos campos están vacíos. Por favor, ingrese números.";
            break;
        case "01":
            $mensajeError = "El campo base está vacío.";
            break;
        case "10":
            $mensajeError = "El campo exponente está vacío.";
            break;
        case "11":
            $base = intval($base);
            $exponente = intval($exponente);
            if ($exponente == 0) {
                if ($base == 0) {
                    $mensajeError = "<span $centrar>($base)<sup>$exponente</sup> tiene 2 valores posibles: 1 o indefinido</span>";
                } else {
                    $mensajeError = "<span $centrar>($base)<sup>$exponente</sup> resultado es: 1</span>";
                }
            } elseif ($exponente < 0) {
                if ($base == 0) {
                    $mensajeError = "<span $centrar>($base)<sup>$exponente</sup> resultado es:<br><br>
                    <math xmlns='http://www.w3.org/1998/Math/MathML'>
                        <mfrac $letra>
                            <mi>1</mi>
                            <mi><span>
                                    ($base)<sup>" . abs($exponente) . "</sup>
                                </span></mi>
                        </mfrac>
                    </math> =
                    <math xmlns='http://www.w3.org/1998/Math/MathML'>
                        <mfrac $letra>
                            <mi>1</mi>
                            <mi><span>$base</span></mi>
                        </mfrac>
                    </math> = Indefinido
                    </span>";
                } else {
                    $mensajeError = "<span $centrar>($base)<sup>$exponente</sup> resultado es:<br><br>
                    <math xmlns='http://www.w3.org/1998/Math/MathML'>
                        <mfrac $letra>
                            <mi>1</mi>
                            <mi><span>
                                    ($base)<sup>" . abs($exponente) . "</sup>
                                </span></mi>
                        </mfrac>
                    </math> =
                    <math xmlns='http://www.w3.org/1998/Math/MathML'>
                        <mfrac $letra>
                            <mi>1</mi>
                            <mi><span>" . pow($base, abs($exponente)) . "</span></mi>
                        </mfrac>
                    </math>
                    </span>";
                }
            } else {
                if ($exponente == 1) {
                    $mensajeError = "<span $centrar>($base)<sup>$exponente</sup> El resultado es $base</span>";
                } elseif ($exponente > 1) {
                    $mensajeError = "<span $centrar>($base)<sup>$exponente</sup> resultado es: " . potencia($base, $exponente) . "</span>";
                }
            }
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
