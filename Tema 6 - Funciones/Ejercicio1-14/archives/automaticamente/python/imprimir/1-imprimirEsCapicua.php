<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function imprimirEscapicua($input1)
{
    $mensajeError = "";
    if (!is_numeric($input1)) {
        var_dump($input1);
        $mensajeError = "El campo está vacío o no es un número. Por favor, ingrese número(s).";
    } else {
        $input1 = (int) $input1; // Convertir a entero
        $esValido = ($input1 >= 0 && $input1 <= 9) || ($input1 >= -9 && $input1 <= -1);
        if ($esValido) {
            if ($input1 >= 0) {
                $mensajeError = "<span>El numero<span style='color: green'>". $input1."</span> es un palíndromo.</span>";
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
