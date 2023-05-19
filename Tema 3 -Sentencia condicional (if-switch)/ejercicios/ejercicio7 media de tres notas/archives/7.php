<?php
$num1 = ($_POST["num1"]);
$num2 = ($_POST["num2"]);
$num3 = ($_POST["num3"]);
if (is_numeric($num1) && is_numeric($num2) && is_numeric($num3)) {
	$num1 = intval($num1);
	$num2 = intval($num2);
	$num3 = intval($num3);
	if ($num1 >= 0 && $num2 >= 0 && $num3 >= 0) {
		$promedio = "El promedio de las tres notas es: " . round((($num1 + $num2 + $num3) / 3), 2);
	} else {
		$promedio = " Uno varios datos no son validos";
	}
} else {
	$promedio = "Ingrese datos en el formulario";
}
print $promedio;
