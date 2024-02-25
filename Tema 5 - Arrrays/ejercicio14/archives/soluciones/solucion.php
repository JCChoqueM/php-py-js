<?php
$fruta = $_POST["input1"];
function usarInput()
{

  // Obtener el valor del input y convertirlo a minúsculas
  $valor =
    strtolower(trim($_POST["input1"]));

  // Crear un array para mapear las letras a sus valores numéricos
  $letrasMap = array('a' => 0, 'b' => 1, 'c' => 2, 'd' => 3, 'e' => 4, 'f' => 5, 'g' => 6, 'h' => 7);

  // Crear un array para mapear los números a sus valores numéricos
  $numerosMap = array('8' => 0, '7' => 1, '6' => 2, '5' => 3, '4' => 4, '3' => 5, '2' => 6, '1' => 7);

  // Verificar si el valor tiene la longitud adecuada
  if (strlen($valor) !== 2) {
    echo "La combinación debe tener exactamente dos caracteres. (PHP)";
    return null; // Devolver null si el valor no tiene la longitud adecuada
  }

  $letra = $valor[0];
  $numero = $valor[1];

  // Verificar si la letra está dentro del rango de "a" a "h" y si el número está dentro del rango de "1" a "8"
  if (!array_key_exists($letra, $letrasMap) || !array_key_exists($numero, $numerosMap)) {
    echo "La combinación debe estar dentro del rango de 'a1' a 'h8'. (PHP)";
    return null; // Devolver null si la letra o el número no están en el rango adecuado
  }

  // Obtener los valores numéricos asociados a la letra y al número
  $ejeY = $letrasMap[$letra];
  $ejeX = $numerosMap[$numero];

  // Devolver un array con los valores numéricos obtenidos
  return array('ejeX' => $ejeX, 'ejeY' => $ejeY);
}
// Acceder a los objetos dentro del array asociativo
$resultado = usarInput();
if ($resultado !== null) {
  $ejeX = $resultado['ejeX'];
  $ejeY = $resultado['ejeY'];
} else {
  exit();
}

$mensaje = "Posicion insertada " .  $_POST["input1"]." resuelto con php";


$tabla_ancho = 300; // Ancho de la tabla
$tabla_alto = 300; // Alto de la tabla
$celula_ancho = 35; // Ancho de las celdas
$celula_alto = 35; // Alto de las celdas

$mensaje .= "<table border='1' style='border-collapse: collapse; width: {$tabla_ancho}px; height: {$tabla_alto}px;'>"; // Establecer un tamaño fijo para la tabla
$mensaje .= "<tr><td style='width: {$celula_ancho}px; height: {$celula_alto}px;'></td>";
// Añadir letras a la derecha
for ($y = 0; $y < 8; $y++) {
  $mensaje .= "<td style='background-color: yellow; width: {$celula_ancho}px; height: {$celula_alto}px;'>" . chr(97 + $y) . "</td>"; // Establecer un tamaño fijo para las celdas
}
$mensaje .= "<td style='width: {$celula_ancho}px; height: {$celula_alto}px;'></td></tr>";

// Añadir filas con números y celdas vacías
for ($x = 0; $x < 8; $x++) {
  $mensaje .= "<tr>";
  // Añadir número a la izquierda
  $mensaje .= "<td style='background-color: orange; width: {$celula_ancho}px; height: {$celula_alto}px;'>" . (8 - $x) . "</td>";
  // Añadir celdas vacías
  for ($y = 0; $y < 8; $y++) {
    $colorFondo = (($x + $y) % 2 == 0) ? 'white' : 'grey';
    // Verificar si esta es la posición correspondiente a $ejeX y $ejeY y aplicar la imagen si es así
    if ($x == $ejeX && $y == $ejeY) {
      $imagenFondo = 'url("images/alfil.png")'; // Cambiar la ruta por la ruta real de tu imagen
    } else if (abs((abs($x) - abs($ejeX))) == abs(abs($y) - abs($ejeY))) {
      $imagenFondo = 'url("images/alfilsemitransparente.png")'; // Cambiar la ruta por la ruta real de tu imagen
    } else {
      $imagenFondo = 'none'; // Sin imagen de fondo
    }
    $mensaje .= "<td style='background-image: $imagenFondo; background-color: $colorFondo; background-size: cover; width: {$celula_ancho}px; height: {$celula_alto}px;'></td>"; // Establecer un tamaño fijo para las celdas
  }



  // Añadir número a la derecha
  $mensaje .= "<td style='background-color: orange; width: {$celula_ancho}px; height: {$celula_alto}px;'>" . (8 - $x) . "</td>";
  $mensaje .= "</tr>";
}

// Añadir fila de letras a la izquierda
$mensaje .= "<tr><td style='width: {$celula_ancho}px; height: {$celula_alto}px;'></td>";
for ($y = 0; $y < 8; $y++) {
  $mensaje .= "<td style='background-color: yellow; width: {$celula_ancho}px; height: {$celula_alto}px;'>" . chr(97 + $y) . "</td>"; // Establecer un tamaño fijo para las celdas
}
$mensaje .= "<td style='width: {$celula_ancho}px; height: {$celula_alto}px;'></td></tr>";

$mensaje .= "</table>";

echo $mensaje;
