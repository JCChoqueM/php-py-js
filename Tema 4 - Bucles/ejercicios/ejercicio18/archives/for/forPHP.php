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
    $num1 = floatval($num1);
    $num2 = intval($num2);
    $mensaje = "";
    $contador;
    $potencia = 1;
    if ($num1 == 0 && $num2 == 0) {
        $mensaje = "$num1<sup>$num2</sup>=0  y tb $num1<sup>$num2</sup>=1 ";
    } elseif ($num2 == 0) {
        $mensaje = "$num1<sup>$num2</sup>=1";
    } else {
        if ($num2 >= 0) {
            for ($contador = 1; $contador <= $num2; $contador++) {
                $potencia *= $num1;
                $mensaje .= "$num1<sup>$contador</sup> = $potencia<br>";
            }
        } else {
            $mensaje = "El exponente debe ser positivo";
        }
    }

    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "<p>$mensaje</p>";
