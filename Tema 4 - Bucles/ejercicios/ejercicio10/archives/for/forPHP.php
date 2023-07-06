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
    $cuadrado = 0;
    $cubo = 0;
    $contador = 0;
    for ($contador = 0; $contador < 5; $contador++) {
        $cuadrado = pow($num1, 2);
        $cubo = pow($num1, 3);
        $mensaje .= "Nº$num1. Cuadrado= $cuadrado. <br>Cubo= $cubo<br><br>";
        $num1++;
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "FOR PHP <br>";
echo $mensaje;
