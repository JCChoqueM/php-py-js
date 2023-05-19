<?php
$num1 = $_GET["num1"];

if ((is_numeric($num1))) {
    $output = shell_exec("python 6.py " . $num1);
    echo $output;
} else {
    echo "Por favor ingrese un numero valido ";
}
