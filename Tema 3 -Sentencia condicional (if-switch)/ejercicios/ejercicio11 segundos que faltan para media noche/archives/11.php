<?php
$num1 = ($_POST["num1"]);
$num2 = ($_POST["num2"]);

if (is_numeric($num1) && is_numeric($num2) && is_int($num1+0) && is_int($num2+0)) {
	$hora = Intval($num1);
	$min = Intval($num2);
	/* SECTION inicio programa */
	if (($hora >= 0 && $hora <= 23) && ($min >= 0 && $min <= 59)) {
		$segundo = 86400 - (($hora * 60 * 60) + ($min * 60));
		echo "la hora es " . (($hora < 10 ? "0" : "") . $hora) . ":" . (($min < 10 ? "0" : "") . $min) . ($hora < 12 ? " Am." : " Pm.");
		echo "<br>Faltan $segundo seg. para la media noche";
	} else {
		echo "Verifique la hora ingresada";
	}

	/* !SECTION fin programa */
} else {
	echo  "Ingrese datos en el formulario";
}
