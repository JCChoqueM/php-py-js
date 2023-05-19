<?php
$num1 = $_GET["num1"];
if (
    isset($num1) &&
    trim($num1) !== "" &&
    is_numeric($num1) &&
    filter_var($num1, FILTER_VALIDATE_INT) !== false
) {
    $output = shell_exec("python 17.py " . $num1);
    echo $output;
} else {
    echo "Por favor ingrese un numero valido en el formulario ";
}
