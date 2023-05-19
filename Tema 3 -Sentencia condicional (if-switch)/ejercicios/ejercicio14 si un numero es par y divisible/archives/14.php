<?php
$a = ($_POST["num1"]);

if (is_numeric($a)) {
	/* SECTION inicio programa */
	if ($a % 2 == 0) {
		$par = "Es par";
	} else {
		$par = "No es par";
	}
	if ($a % 5 == 0) {
		$divisible = "y es divisible entre 5";
	} else {
		$divisible = " y no es divisible entre 5";
	}
	$mensaje = "El numero $a: <br>$par <br>$divisible";
	/* !SECTION fin programa */
} else {
	$mensaje = "Ingrese datos en el formulario";
}
echo $mensaje;
