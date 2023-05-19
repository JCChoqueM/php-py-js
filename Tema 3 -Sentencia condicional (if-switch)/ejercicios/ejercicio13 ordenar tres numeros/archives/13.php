<?php
$a = ($_POST["num1"]);
$b = ($_POST["num2"]);
$c = ($_POST["num3"]);

if (is_numeric($a) && is_numeric($b) && is_numeric($c)) {
	/* SECTION inicio programa */
	$menor;
	$medio;
	$mayor;
	switch (true) {
		case ($a >= $b && $a >= $c):
			$mayor = $a;
			$menor = ($b < $c) ? $b : $c;
			break;
		case ($b >= $a && $b >= $c):
			$mayor = $b;
			$menor = ($a < $c) ? $a : $c;
			break;
		case ($c >= $a && $c >= $b):
			$mayor = $c;
			$menor = ($a < $b) ? $a : $b;
			break;
	}
	$medio = $a + $b + $c - $mayor - $menor;
	echo "<br>Orden ascendente: ";
	echo "<br>$menor, $medio, $mayor";
	echo "<br><br>Orden descendente: ";
	echo "<br>$mayor, $medio, $menor";

	/* !SECTION fin programa */
} else {
	echo  "Ingrese datos en el formulario";
}
