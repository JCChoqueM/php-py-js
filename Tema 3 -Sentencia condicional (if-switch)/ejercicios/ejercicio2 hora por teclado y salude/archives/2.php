<?php
$num1 =($_POST["num1"]);
$solucion;
if ($num1 >= 0 && $num1 < 24) {
	if ($num1 >= 6 && $num1 <= 12) {
		$solucion = "Buenos Días";
	} else if ($num1 >= 13 && $num1 <= 20) {
		$solucion = "Buenas Tardes";
	} else if ($num1 >= 21 || $num1 <= 5) {
		$solucion = "Buenas Noches";
	}
} else {
	$solucion = "Hora no valida";
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
