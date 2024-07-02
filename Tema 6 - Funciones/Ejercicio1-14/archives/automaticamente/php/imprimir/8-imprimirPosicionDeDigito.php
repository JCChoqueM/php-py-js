<?php
include __DIR__ . '/../funciones/funciones.php';
function imprimirPosicionDeDigito($input1, $input2)
{

    $nDigito = digitos($input1);
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
            $mensajeError = "El campo 2 está vacío";
            break;
        case "11":
            $nDigito = digitos($input1);
            $input1 = intval($input1);
            $input2 = intval($input2);
            if ($input2 > 9 || $input2 < 0) {
                $mensajeError .= "<span $rojo>Numero ingresado $input1.<br> Solo se permiten numeros positivos de 1 digito: $input2 no es valido para la busqueda</span>.";
            } else {
                $mensajeError = "<br><div $centrar>Posiciones del numero: $input1<br><span $azul>Izquierda a Derecha</span>" .
                    crearTabla(abs($input1), 0) . "</div>";
                $mensajeError .= "<div $centrar> <span $rojo>Derecha a izquierda</span>" .
                    crearTablaReves(abs($input1), 0) . "</div>";

                $mensajeError .= "<span $azul>El numero en la posicion $input2 es: <span $negro>"  . "</span></span>.";
            }
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}
