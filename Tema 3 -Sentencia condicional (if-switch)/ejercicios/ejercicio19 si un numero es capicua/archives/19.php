<?php
$num1 = ($_POST["num1"]);
$num1 = ltrim($num1, "0");
if (
	isset($num1) &&
	trim($num1) !== "" &&
	is_numeric($num1) &&
	filter_var($num1, FILTER_VALIDATE_INT) !== false
) {
	/* SECTION inicio programa */
	if ($num1 >= 0 && $num1 <= 99999) {
		if ($num1 >= 0 && $num1 <= 9) {
			$capicua = true;
		} else if ($num1 >= 10 && $num1 <= 99) {
			$capicua = intval($num1 / 10) == $num1 % 10;
		} else if ($num1 >= 100 && $num1 <= 999) {
			$capicua = intval($num1 / 100) == $num1 % 10;
		} else if ($num1 >= 1000 && $num1 <= 9999) {
			$capicua =
				intval($num1 / 1000) == $num1 % 10 &&
				intval($num1 / 100) % 10 == intval($num1 / 10) % 10;
		} else if ($num1 >= 10000 && $num1 <= 99999) {
			$capicua =
				(intval($num1 / 10000) == $num1 % 10) &&
				(intval($num1 / 1000) % 10 == intval($num1 / 10) % 10);
		}

		//^ inicio mensaje si es capicua
		if ($capicua) {
			$mensaje = "El numero $num1 es Capicua";
		} else {
			$mensaje = "El numero $num1 NO es capicua";
		}

		//^ fin mensaje si es capicua
	} else {
		$mensaje = "El numero debe ser entero y positivo";
	}
	/* !SECTION fin programa */
} else {
	$mensaje = "Ingrese un número Entero.";
}
echo $mensaje;
