<?php
function imprimirQuitaPorDetras($input1, $input2)
{
    $input1 = intval($input1);
    $input2 = intval($input2);
    $nDigito = digitos($input1);
    $centrar = "style='text-align: center;'";
    $rojo = "style='color: red;'";
    $verde = "style='color: darkgreen;'";
    $mensajeError = "";
    $estado = (!is_numeric($input1) ? "0" : "1") . (!is_numeric($input2) ? "0" : "1");

    switch ($estado) {
        case "00":
            $mensajeError = "00- Ambos campos están vacíos. Por favor, ingrese números.";
            break;
        case "01":
            $mensajeError = "01- El campo 1 está vacío.";
            break;
        case "10":
            $mensajeError = "10- El campo 2 está vacío.";
            break;
        case "11":
            if ($input2 > $nDigito) {
                $mensajeError = "
                <div $centrar>El número $input1 tiene <span $verde>$nDigito " . ($nDigito == 1 ? "dígito." : "dígitos.") . "</span> <br>
                " . crearTablaReves($input1, 1) . "
                <span $rojo>No se puede quitar $input2 dígitos por Detras</span>.
                </div>";
            } elseif ($input2 < 0) {
                $mensajeError = "<span $rojo>La cantidad de números a quitar no puede ser negativa</span>";
            } else {
                $mensajeError = "Continuar:<br><div $centrar>El número $input1 tiene <span $verde>$nDigito " . ($nDigito == 1 ? "dígito." : "dígitos.") . "</span> <br>
                " . crearTablaReves($input1, 1) . "
                <span $verde>Se puede quitar $input2 dígitos por Detras</span>.
                </div>";
            }
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
