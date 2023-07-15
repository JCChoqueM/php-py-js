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
    $mensaje = "";
    $mayor;
    $menor;
    if ($num1 != $num2) {
        if ($num1 > $num2) {
            $mayor = $num1;
            $menor = $num2;
        } else {
            $mayor = $num2;
            $menor = $num1;
        }
        while ($menor <= $mayor) {
            $mensaje .= "($menor)  ";
            $menor = $menor + 7;
        }
    } else {
        $mensaje = "Debe introducir 2 numeros diferentes";
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje";
