<?php
$num1 = ($_POST["num1"]);
$num2 = ($_POST["num2"]);
if ((is_numeric($num1)) && (is_numeric($num2))) {
	$num1 = intval($num1);
	$num2 = intval($num2);
	if ($num1 != 0) {
		$mensaje = "el valor de x:" . (round((-$num2 / $num1), 2));
	} else {
		$mensaje = "a debe ser distinto de 0";
	}
} else {
	$mensaje = "Ingrese datos en el formulario";
}
print $mensaje;
