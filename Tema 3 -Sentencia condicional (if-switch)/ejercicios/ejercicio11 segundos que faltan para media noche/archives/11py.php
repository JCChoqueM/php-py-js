<?php
$num1 = $_GET["num1"];
$num2 = $_GET["num2"];

if ((is_numeric($num1) && is_numeric($num2)) && is_int($num1+0) && is_int($num2+0)) {
    $output = shell_exec("python 11.py " . $num1 . " " . $num2);
    echo $output;
} else {
    echo "Por favor ingrese un numero valido en el formulario ";
}
