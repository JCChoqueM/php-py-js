<?php
$num1 = ($_POST["num1"]);
if (is_numeric($num1)) {
	$num1 = intval($num1);
	if ($num1 > 0) {
		$mensaje = "Tiempo de caida es: " . (round(sqrt(($num1 * 2) / 9.81), 2)) . "m/s²";
	} elseif ($num1 == 0) {
		$mensaje = "El tiempo de caida sera  0";
	} elseif ($num1 < 0) {
		$mensaje = "La altura no puede ser menor a 0";
	}
} else {
	$mensaje = "Ingrese datos en el formulario";
}
print $mensaje;
