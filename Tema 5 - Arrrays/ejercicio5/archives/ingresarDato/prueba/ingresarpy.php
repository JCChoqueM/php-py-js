<?php

$numeros = ["2", "1"];
$jsonData = json_encode($numeros);
print_r($numeros);
echo ("<br>");
var_dump($numeros);
echo ("<br>");
echo ("<br>");
print_r($jsonData);
echo ("<br>");
var_dump($jsonData);
$output = shell_exec("python ingresar.py " . escapeshellarg(json_encode($numeros)));

echo ("<br><br>Respuesta de python:<br>");
echo $output;
