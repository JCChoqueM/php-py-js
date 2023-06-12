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
    do {
        $num1 = floor($num1 / 10);
        $contador += 1;
    } while ($num1 > 0);
    $mensaje = "El numero $nuevoNumero tiene $contador " . ($contador >= 2 ? "Digitos" : "Digito");
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "DO-WHILE PHP <br>";
echo $mensaje;
