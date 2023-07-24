<?php
$num1 = $_POST["num1"];
$num2 = $_POST["num2"];
if (
    isset($num1) &&
    trim($num1) !== "" &&
    is_numeric($num1)
    /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
    /* SECTION inicio programa */
    $num1 = intval($num1);
    $num2 = intval($num2);
    if ($num2 >= 0 && $num2 < 10) {
        $mensaje = "El presente ejericio no tiene una solucion con el ciclo FOR";
    } else {
        $mensaje = "El digito debe estar comprendido entre 0 y 9";
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje";
