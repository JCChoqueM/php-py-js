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
    $contador = 0;
    $i = 1;
    if ($num1 > 1) {
        while ($i <= $num1) {
            if ($num1 % $i == 0) {
                $contador += 1;
            }
            $i++;
        }
        if ($contador <= 2) {
            $mensaje = "El numero $num1:<br> Es primo";
        } else {
            $mensaje = "El numero $num1:<br> NO es primo";
        }
    } else if ($num1 == 1) {
        $mensaje = "El numero 1, no es ni primo ni compuesto";
    } else {
        if ($num1 <= 0) {
            $mensaje = "El número debe ser mayor que 1";
        }
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje ";
