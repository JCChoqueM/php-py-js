<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirEscapicua($input1)
{
    $mensajeError = "";
    $estado = !is_numeric($input1) ? "0" : "1";
    $esValido = ($input1 >= 0 && $input1 <= 9) || ($input1 >= -9 && $input1 <= -1);
    switch ($estado) {
        case "0":
            $mensajeError
                = "El campo está vacío o no es un número. Por favor, ingrese número(s).";
            break;
        case "1":
            switch (true) {
                case $esValido:
                    if ($input1 >= 0) {
                        $mensajeError =
                            "<span>El numero dfgdfd<span style='color: green'>" . $input1 . "</span> es un palíndromo.</span>";
                    } else {
                        $mensajeError = "<span>El número <span style='color: red'>" . $input1 . "</span>  es negativo<br>Al ignorar el signo:<br> <span style='color: green'>" . abs($input1) . " </span>es un palíndromo.</span>";
                    }
                    break;
                case !$esValido:
                    if ($input1 >= 0) {
                        $mensajeError = "<span>" . esCapicua($input1) . "</span>";
                    } else {
                        $mensajeError = "<span>El número <span style='color: red'>" . $input1 . "</span> es negativo.<br> Al ignorar el signo:<br> "  . esCapicua($input1) . "</span>";
                    }
                    break;
            }
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }
    if (!is_numeric($input1)) {
        $mensajeError = "El campo está vacío o no es un número. Por favor, ingrese número(s).";
    } else {
        $input1 = (int) $input1; // Convertir a entero
        if ($esValido) {
            if ($input1 >= 0) {
                $mensajeError = "<span>El numero<span style='color: green'>" . $input1 . "</span> es un palíndromo.</span>";
            } else {
                $mensajeError = "<span>El número <span style='color: red'>" . $input1 . "</span>  es negativo<br>Al ignorar el signo:<br> <span style='color: green'>" . abs($input1) . " </span>es un palíndromo.</span>";
            }
        } else {
            if ($input1 >= 0) {
                $mensajeError = "<span>" . esCapicua($input1) . "</span>";
            } else {
                $mensajeError = "<span>El número <span style='color: red'>" . $input1 . "</span> es negativo.<br> Al ignorar el signo:<br> "  . esCapicua($input1) . "</span>";
            }
        }
    }
    return $mensajeError;
}
