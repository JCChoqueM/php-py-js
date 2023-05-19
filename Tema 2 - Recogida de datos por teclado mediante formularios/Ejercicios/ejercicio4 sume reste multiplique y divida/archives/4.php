<?php
$num1 = $_POST["num1"];
$num2 = $_POST["num2"];
$suma = $num1 + $num2;
$resta = $num1 - $num2;
$multiplicacion = $num1 * $num2;
$division = ($num2 != 0) ? round($num1 / $num2, 2) : "Infinity";

$mensaje = "suma:<br>$num1 + $num2 = $suma
			<br><br>resta:<br>$num1 - $num2 = $resta
			<br><br>multiplicacion:<br>$num1 * $num2 = $multiplicacion
			<br><br>division:<br>$num1 / $num2 = $division";

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
