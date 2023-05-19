<?php
$num1 = ($_POST["num1"]);
if (($num1 >= 0)) {
	$num1 = intval($num1);
	if ($num1 > 0 && $num1 <= 40) {
		$salario = $num1 * 12;
		$mensaje = "Horas trabajadas = $num1 Hrs.
            <br><br>Salario = $num1 * 12Bs.
            <br><br>Salario total = $num1 *1 2 = $salario Bs.";
	} elseif ($num1 > 40) {
		$hrsExtra = $num1 - 40;
		$salExtra = $hrsExtra * 16;
		$mensaje = "Horas trabajadas = $num1 Hrs.
            <br><br>Horas Extra = $hrsExtra
            <br><br>Salario Extra = $hrsExtra * 16Bs. = $salExtra Bs.
            <br><br>Salario total = 480 + $salExtra = " . $salExtra + 480 . " Bs.";
		$saludo = 2;
	} elseif ($num1 === 0) {
		$mensaje = "No trabajo esta semana";
	}
} else {
	$mensaje = "Ingrese un numero de HORAS trabajadas";
}
print $mensaje . "<br>";
