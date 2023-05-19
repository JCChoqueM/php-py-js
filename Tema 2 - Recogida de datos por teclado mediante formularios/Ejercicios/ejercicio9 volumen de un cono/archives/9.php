<?php
$radio = $_POST["num1"];
$altura = $_POST["num2"];
$total = (pi() * pow($radio, 2) * $altura) / 3;

$mensaje = "Vol=( &#928*radio²*altura)/3" .
	"<br><br>Volumen = $radio " .
	"<br><br>Volumen = $altura " .
	"<br><br>Volumen = " . round($total, 2) . "cm³";

echo $mensaje;
	
	

















/* if ($metodo == "php") { */
	// Sumar utilizando PHP
/* 	$resultado = $num1 * $num2; */
/* 	echo "la multiplicacion de <br> $num1 * $num2 es: ".$resultado;
} elseif ($metodo == "python") { */
	// Sumar utilizando Python
/* 	$output = shell_exec("python 1.py " . $num1 . " " . $num2);
	echo $output;
} else {
	echo "Método no válido";
} */
