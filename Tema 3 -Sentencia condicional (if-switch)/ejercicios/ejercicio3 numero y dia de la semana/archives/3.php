<?php
$num1 = ($_POST["num1"]);
$solucion;
if ($num1 > 0 && $num1 <= 7) {
	switch ($num1) {
		case ($num1 == 1):
			$solucion = "$num1 es Lunes";
			break;
		case ($num1 == 2):
			$solucion = "$num1 es Martes";
			break;
		case ($num1 == 3):
			$solucion = "$num1 es Miercoles";
			break;
		case ($num1 == 4):
			$solucion = "$num1 es Jueves";
			break;
		case ($num1 == 5):
			$solucion = "$num1 es Viernes";
			break;
		case ($num1 == 6):
			$solucion = "$num1 es Sabado";
			break;
		case ($num1 == 7):
			$solucion = "$num1 es Domingo";
			break;
		default:
			$solucion = "No sea burro ";
	}
} else {
	$solucion = "No es un numero valido";
}
print $solucion;


















/* if ($metodo == "php") { */
	// Sumar utilizando PHP
/* 	$resultado = $$num1 * $num2; */
/* 	echo "la multiplicacion de <br> $$num1 * $num2 es: ".$resultado;
} elseif ($metodo == "python") { */
	// Sumar utilizando Python
/* 	$output = shell_exec("python 1.py " . $$num1 . " " . $num2);
	echo $output;
} else {
	echo "Método no válido";
} */
