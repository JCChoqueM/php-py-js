<?php
$num1 = ($_POST["num1"]);
$num2 = ($_POST["num2"]);
$num3 = ($_POST["num3"]);
if (is_numeric($num1) && is_numeric($num2) && is_numeric($num3)) {
    $num1 = floatval(($num1));
    $num2 = floatval($num2);
    $num3 = floatval($num3);
    if ($num1 != 0) {
        $d = ($num2 ** 2) - (4 * $num1 * $num3);

        if ($d > 0) {
            $solucion = (-$num2 + sqrt($d)) / (2 * $num1);
            $solucion2 = (-$num2 - sqrt($d)) / (2 * $num1);
            echo "Discriminate = $d>0";
            echo "<br><br>Existen 2 soluciones";
            echo "<br><br>x1=" . round($solucion, 2);
            echo "<br>x2=" . round($solucion2, 2);
        } elseif ($d == 0) {
            $solucion = -$num2 / (2 * $num1);
            echo "Discriminate = $d == 0";
            echo "<br><br>Existen 1 solucion";
            echo "<br><br>x=" . round($solucion, 2);
        } elseif ($d < 0) {
            echo "Discriminate = $d < 0";
            echo "<br><br> Las soluciones son complejas y no se pueden calcular";
        }
    } else {
        echo "a no puede ser 0";
    }
} else {
    echo "Ingrese datos en el formulario";
}
