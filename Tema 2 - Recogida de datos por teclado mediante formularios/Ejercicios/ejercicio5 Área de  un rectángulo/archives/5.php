<?php
$num1 = $_POST["num1"];
$num2 = $_POST["num2"];
$area = round($num1 * $num2,2);

$mensaje = "Area = Base * Altura
			<br><br>Base = $num1
			<br><br>Altura =$num2 
			<br><br>Area = $num1 * $num2
			<br><br>Area = $area";

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
