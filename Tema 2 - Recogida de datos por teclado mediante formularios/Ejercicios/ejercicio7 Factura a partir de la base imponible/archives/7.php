<?php
$num1 = floatval($_POST["num1"]) ;

$mensaje = "Base Imponible es = $num1 Bs".
			"<br><br>Iva = " . round($num1 * 0.1,2) ." Bs".
			"<br><br>Total a pagar =" . $num1 + ($num1 * 0.1)." Bs";

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
