<?php
$num1 = $_GET["num1"];

$output = shell_exec("python solucion.py " . $num1);
echo $output;
