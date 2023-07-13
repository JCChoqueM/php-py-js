<?php
$num1 = $_GET["num1"];
$num2 = $_GET["num2"];
/* $num1 = ltrim($num1, "0"); */
if (
    isset($num1) &&
    trim($num1) !== "" &&
    is_numeric($num1) // &&
    /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
    $output = shell_exec("python for_py.py " . $num1 . " " . $num2);
    echo $output;
} else {
    echo "Por favor ingrese un numero valido en el formulario ";
}
