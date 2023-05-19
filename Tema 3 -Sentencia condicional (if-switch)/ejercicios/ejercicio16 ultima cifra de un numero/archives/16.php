<?php
$a = ($_POST["num1"]);
if (is_numeric($a) && (filter_var($a, FILTER_VALIDATE_INT) !== false)) {
	/* SECTION inicio programa */
	if ($a >= 0) {
		$ultimo = $a % 10;
	} else {
		$ultimo = abs($a) % 10;
	}
	$mensaje = "El ultimo digito de $a <br>es: $ultimo";
	/* !SECTION fin programa */
} else {
	$mensaje = "Ingrese datos en el formulario";
}
echo $mensaje;
