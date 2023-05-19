<?php
$num1 = floatval($_POST["num1"]);
$Mb = $num1 / 1024;
$mensaje = " Kb = $num1 " .
	"<br><br>Mb= $num1 / 1024" .
	"<br><br>$num1 Kb = $Mb Mb";

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
