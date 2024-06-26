<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirDigitoN($input1, $input2)
{
    $centrar = "style='text-align: center;'";
    $rojo = "style='color: red;'";
    $verde = "style='color: darkgreen;'";
    $azul = "style='color: blue;'";
    $negro = "style='color: black;'";
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
            $mensajeError = "input 2 esta vacio";
            break;
        case "11":
            $nDigito = digitos($input1);
            $input1 = intval($input1);
            $input2 = intval($input2);
            $mensajeError = "<br><div $centrar>El numero $input1 tiene <span $verde> " . ($nDigito == 1 ? "la posicion." : " las siguiuentes posiciones.") . "</span> <br>" .
                crearTabla(abs($input1), 0) . "</div>";

            switch (true) {
                case ($input2 > $nDigito - 1 || $input2 < 0):
                    $mensajeError .= "<span $rojo>No se puede buscar la posicion $input2</span>.";
                    break;
                default:
                    $mensajeError .= "<span $azul>El numero en la posicion $input2 es: <span $negro>" . abs(digitoN($input1, $input2)) . "</span></span>.";
                    break;
            }
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return  $mensajeError;
}
