<?php
$num1 = ($_POST["num1"]);
$num2 = ($_POST["num2"]);
if (is_numeric($num1) && is_numeric($num2)) {
	$dia = Intval($num1);
	$mes = Intval($num2);
	/* SECTION inicio programa */
	if ((($dia > 0 && $dia <= 31) && ($mes > 0 && $mes <= 12)) && (($mes == 2 && $dia <= 29) || (($mes == 4 || $mes == 6 || $mes == 9 || $mes == 11) && $dia <= 30) || (($mes == 1 || $mes == 3 || $mes == 5 || $mes == 7 || $mes == 8 || $mes == 10 || $mes == 12) && $dia <= 31))) {
		switch ($mes) {
			case 1:
				echo "su fecha de nacimiento es :<br>$dia de Enero";
				echo "<br>Su signo es " . ($dia >= 20 ? "Acuario" : "Capricornio");
				break;
			case 2:
				echo "su fecha de nacimiento es :<br>$dia de Febrero";
				echo "<br>Su signo es " . ($dia >= 19 ? "Piscis" : "Acuario");
				break;
			case 3:
				echo "su fecha de nacimiento es :<br>$dia de Marzo";
				echo "<br>Su signo es " . ($dia >= 21 ? "Aries" : "Piscis");
				break;
			case 4:
				echo "su fecha de nacimiento es :<br>$dia de Abril";
				echo "<br>Su signo es " . ($dia >= 20 ? "Tauro" : "Aries");
				break;
			case 5:
				echo "su fecha de nacimiento es :<br>$dia de Mayo";
				echo "<br>Su signo es " . ($dia >= 21 ? "Geminis" : "Tauro");
				break;
			case 6:
				echo "su fecha de nacimiento es :<br>$dia de Junio";
				echo "<br>Su signo es " . ($dia >= 21 ? "Cancer" : "Geminis");
				break;
			case 7:
				echo "su fecha de nacimiento es :<br>$dia de Julio";
				echo "<br>Su signo es " . ($dia >= 23 ? "Leo" : "Cancer");
				break;
			case 8:
				echo "su fecha de nacimiento es :<br>$dia de Agosto";
				echo "<br>Su signo es " . ($dia >= 23 ? "Virgo" : "Leo");
				break;
			case 9:
				echo "su fecha de nacimiento es :<br>$dia de Septiembre";
				echo "<br>Su signo es " . ($dia >= 23 ? "Libra" : "Virgo");
				break;
			case 10:
				echo "su fecha de nacimiento es :<br>$dia de Octubre";
				echo "<br>Su signo es " . ($dia >= 23 ? "Escorpio" : "Libra");
				break;
			case 11:
				echo "su fecha de nacimiento es :<br>$dia de Noviembre";
				echo "<br>Su signo es " . ($dia >= 22 ? "Sagitario" : "Escorpio");
				break;
			case 12:
				echo "su fecha de nacimiento es :<br>$dia de Diciembre";
				echo "<br>Su signo es " . ($dia >= 22 ? "Capricornio" : "Sagitario");
				break;
			default:
				echo "Wey que hacess";
		}
	} else {
		echo "Verifique el dia y mes";
	}

	/* !SECTION fin programa */
} else {
	echo  "Ingrese datos en el formulario";
}
