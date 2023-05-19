<?php
if (!empty($_GET["num1"])) {
    $num1 = $_GET["num1"];
    $output = shell_exec("python 1.py " . $num1);
    echo $output;
} else {
    echo "Por favor ingrese un día de la semana.";
}
