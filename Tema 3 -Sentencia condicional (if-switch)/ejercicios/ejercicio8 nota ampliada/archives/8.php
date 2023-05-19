<?php
$num1 = ($_POST["num1"]);
$num2 = ($_POST["num2"]);
$num3 = ($_POST["num3"]);
if (is_numeric($num1) && is_numeric($num2) && is_numeric($num3)) {
	$num1 = floatval($num1);
	$num2 = floatval($num2);
	$num3 = floatval($num3);
	if (($num1 >= 0 &&$num1 <= 100)&&($num2 >= 0 && $num2 <= 100) && ($num3 >= 0 && $num3 <= 100)) {
		$promedio = round((($num1 + $num2 + $num3) / 3), 2);
		if ($promedio < 51) {
			$mensaje = "Su nota es :  $promedio <br>Nota: Insuficiente";
		} else if ($promedio >= 51 && $promedio <= 59) {
			$mensaje = "Su nota es :  $promedio <br>Nota: Suficiente";
		} else if ($promedio >= 60 && $promedio <= 74) {
			$mensaje = "Su nota es :  $promedio <br>Nota: Bien";
		} else if ($promedio >= 75 && $promedio <= 90) {
			$mensaje = "Su nota es :  $promedio <br>Nota: Notable";
		} else if ($promedio > 90) {
			$mensaje = "Su nota es :  $promedio <br>Nota: Sobresaliente";
		}
	} else {
		$mensaje = " Uno varios datos no son validos";
	}
} else {
	$mensaje = "Ingrese datos en el formulario";
}
print $mensaje;
