<?php
$num1 = ((($_POST["num1"])));
$mensaje = "";
if (
    isset($num1) &&
    trim($num1) !== "" &&
    is_numeric($num1)
    /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
    /* SECTION inicio programa */
    $nuevoNumero = $num1;
    if ($num1 < 0) {
        $num1 = abs($num1);
    }
    $contador = 0;
    for ($contador = 0; $num1 > 0; $contador++) {
        $num1 = floor($num1 / 10);
    }
    if ($contador <= 1) {
        $mensaje = "El numero $nuevoNumero tiene 1 Digito";
    } else {
        $mensaje = "EL numero $nuevoNumero tiene $contador Digitos";
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "FOR PHP <br>";
echo $mensaje;
