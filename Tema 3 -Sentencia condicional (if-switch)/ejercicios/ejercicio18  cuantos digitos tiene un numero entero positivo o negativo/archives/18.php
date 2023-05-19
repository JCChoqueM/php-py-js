<?php
$num1 = ($_POST["num1"]);
$num1= ltrim($num1, "0");
if (
	isset($num1) &&
	trim($num1) !== "" &&
	is_numeric($num1) &&
	filter_var($num1, FILTER_VALIDATE_INT) !== false
) {
	/* SECTION inicio programa */
	$a = abs($num1);
	$dig;
	if ($a >= 0 && $a <= 99999) {
		switch (true) {
			case ($a <= 9):
				$dig = 1;
				break;
			case ($a <= 99):
				$dig = 2;
				break;
			case ($a <= 999):
				$dig = 3;
				break;
			case ($a <= 9999):
				$dig = 4;
				break;
			case ($a <= 99999):
				$dig = 5;
				break;
		}
		$mensaje = "El numero $num1 tiene: <br> " . $dig . ($dig == 1 ? " digito" : " digitos");
	} else {
		$mensaje = "Solo se aceptan numeros de hasta 5 digitos ";
	}
	/* !SECTION fin programa */
} else {
	$mensaje = "Ingrese un número Entero.";
}
echo $mensaje;
