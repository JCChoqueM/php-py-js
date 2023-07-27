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
    $contador = 1;
    if ($num1 >= 0) {
        $mensaje .= "Los numeros enteros positivos menores que $num1 que no son divisibles entre $num2 son : <br>";
        while ($contador < $num1) {
            if ($contador % $num2 != 0) {
                $mensaje .= "($contador)";
            }
            $contador += 1;
        }
    } else {
        $mensaje = "El número debe ser mayor o igual que 0";
    }


    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje";
