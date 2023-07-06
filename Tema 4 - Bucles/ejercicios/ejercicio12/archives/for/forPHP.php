<?php
$num1 = $_POST["num1"];
if (
    isset($num1) &&
    trim($num1) !== "" &&
    is_numeric($num1)
    /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
    /* SECTION inicio programa */
    $num1 = intval($num1);
    $mensaje = "";
    if ($num1 > 0) {
        $suma = 0;
        $anterior = 1;
        $nuevo = 0;
        for ($contador = 0; $contador < $num1; $contador++) {
            $mensaje .= "$suma, ";
            $suma = $anterior + $nuevo;
            $anterior = $nuevo;
            $nuevo = $suma;
        }
    } else {
        $mensaje = "El número debe ser mayor que 0  ";
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo $mensaje;
