<?php
$num1 = $_GET["num1"];
if (($num1 >= 0)) {
    $output = shell_exec("python 4.py " . $num1);
    echo $output;
} else {
    echo "Por favor ingrese un numero valido de HORAS trabajadas";
}
