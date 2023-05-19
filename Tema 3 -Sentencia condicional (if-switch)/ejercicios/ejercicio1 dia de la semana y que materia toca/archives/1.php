<?php

function eliminar_tildes($cadena)
{
	$cadena = str_replace(
		array('á', 'à', 'ä', 'â', 'ª', 'Á', 'À', 'Â', 'Ä'),
		array('a', 'a', 'a', 'a', 'a', 'A', 'A', 'A', 'A'),
		$cadena
	);

	$cadena = str_replace(
		array('é', 'è', 'ë', 'ê', 'É', 'È', 'Ê', 'Ë'),
		array('e', 'e', 'e', 'e', 'E', 'E', 'E', 'E'),
		$cadena
	);

	$cadena = str_replace(
		array('í', 'ì', 'ï', 'î', 'Í', 'Ì', 'Ï', 'Î'),
		array('i', 'i', 'i', 'i', 'I', 'I', 'I', 'I'),
		$cadena
	);

	$cadena = str_replace(
		array('ó', 'ò', 'ö', 'ô', 'Ó', 'Ò', 'Ö', 'Ô'),
		array('o', 'o', 'o', 'o', 'O', 'O', 'O', 'O'),
		$cadena
	);

	$cadena = str_replace(
		array('ú', 'ù', 'ü', 'û', 'Ú', 'Ù', 'Û', 'Ü'),
		array('u', 'u', 'u', 'u', 'U', 'U', 'U', 'U'),
		$cadena
	);

	$cadena = str_replace(
		array('ñ', 'Ñ', 'ç', 'Ç'),
		array('n', 'N', 'c', 'C'),
		$cadena
	);

	return $cadena;
}
// Ejemplo de uso
$cadena = $_POST["num1"];

$textoProcesado = eliminar_tildes(strtolower($cadena));

switch ($textoProcesado) {
	case "lunes":
		echo "Lunes tienes matematicas";
		break;
	case "martes":
		echo "Martes tienes lenguaje";
		break;
	case "miercoles":
		echo "Miércoles tienes fisica";
		break;
	case "jueves":
		echo "Jueves tienes quimica";
		break;
	case "viernes":
		echo "Viernes tienes musica";
		break;
	case "sabado":
		echo "Sábado tienes psicologia";
		break;
	case "domingo":
		echo "Domingo es tu dia de descanso Felicidades!!!";
		break;
	default:
		echo "No es un día valido";
}

















/* if ($metodo == "php") { */
	// Sumar utilizando PHP
/* 	$resultado = $num1 * $num2; */
/* 	echo "la multiplicacion de <br> $num1 * $num2 es: ".$resultado;
} elseif ($metodo == "python") { */
	// Sumar utilizando Python
/* 	$output = shell_exec("python 1.py " . $num1 . " " . $num2);
	echo $output;
} else {
	echo "Método no válido";
} */
