<?php
$num1 = floatval($_POST["num1"]);

$mensaje = " Horas trabajadas = $num1 Hrs." .
	"<br><br>Salario = $num1 * 12Bs." .
	"<br><br>Salario total =" . $num1 * 12 . "Bs.";

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
