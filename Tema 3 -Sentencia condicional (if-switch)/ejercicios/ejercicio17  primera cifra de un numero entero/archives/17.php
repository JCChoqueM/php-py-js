<?php
$num1 = ($_POST["num1"]);
if (
	isset($num1) &&
	trim($num1) !== "" &&
	is_numeric($num1) &&
	filter_var($num1, FILTER_VALIDATE_INT) !== false
) {
	/* SECTION inicio programa */
	$a = abs($num1);
	if ($a >= 0 && $a <= 99999) {
		switch (true) {
			case ($a <= 9):
				$mensaje = "El primer digito de $num1 <br>es: $a";
				break;
			case ($a <= 99):
				$mensaje = "El primer digito de $num1 <br>es: " . (int)($a / 10);
				break;
			case ($a <= 999):
				$mensaje = "El primer digito de $num1 <br>es: " . (int)($a / 100);
				break;
			case ($a <= 9999):
				$mensaje = "El primer digito de $num1 <br>es: " . (int)($a / 1000);
				break;
			case ($a <= 99999):
				$mensaje = "El primer digito de $num1 <br>es: " . (int)($a / 10000);
				break;
		}
	} else {
		$mensaje = "Solo se aceptan numeros de hasta 5 digitos ";
	}
	/* !SECTION fin programa */
} else {
	$mensaje = "Ingrese un número Entero.";
}
echo $mensaje;
