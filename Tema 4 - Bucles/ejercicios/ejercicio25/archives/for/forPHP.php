<?php
$num1 = $_POST["num1"];
if (
    isset($num1) &&
    trim($num1) !== "" &&
    is_numeric($num1)
    /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
    /* SECTION inicio programa */
    $mensaje = "El ejercicio no tiene una solucion for";
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje ";
