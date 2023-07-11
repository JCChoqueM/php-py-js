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
    $contador = 0;
    $potencia = 1;
    $mensaje = "";
    if ($num1 == 0 && $num2 == 0) {
        $mensaje = "En este caso 0^0 puede tener 2 valores 0 y 1 dependiendo como se lo quiere tratar";
    } else if ($num1 == 0 && $num2 < 0) {
        $mensaje = "El resultado es indefinido ";
    } else if ($num2 == 0) {
        if ($num1 != 0) {
            $potencia = 1;
            $mensaje = "$potencia";
        } else {
            $mensaje = "Dependiendo de como se trabaje el resultado sera 0 o 1";
        }
    } else {
        if ($num2 > 0) {
            do {
                $potencia *= $num1;
                $contador += 1;
            } while ($contador < $num2);
        } else if ($num2 < 0) {
            do{
                $potencia *= $num1;
                $contador += 1;
            }
            while ($contador < -$num2) ;
            $potencia = 1 / $potencia;
        }
        $mensaje = "$potencia";
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo $mensaje;
