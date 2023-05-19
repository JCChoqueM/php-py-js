<?php
$num1 = $_GET["num1"];
$num2 = $_GET["num2"];
$num3 = $_GET["num3"];

if ((is_numeric($num1) && is_numeric($num2) && is_numeric($num3))) {
    $output = shell_exec("python 13.py " . $num1 . " " . $num2 . " " . $num3);
    echo $output;
} else {
    echo "Por favor ingrese un numero valido en el formulario ";
}
