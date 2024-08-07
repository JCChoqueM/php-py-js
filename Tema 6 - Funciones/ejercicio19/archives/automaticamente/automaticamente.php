<?php
include __DIR__ . '/../automaticamente/php/imprimir/prueba.php';
// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  // Verificar si se recibieron datos y que sea un array
  if (is_array($datos) && count($datos) > 0) {
    $select = $datos[1] == $datos[2] ? "Iguales" : $datos[1] . $datos[2];

    // Preparar el nombre de la función
    $funcion = "imprimir" . $select;

    // Verificar si la función existe y llamarla
    if (function_exists($funcion)) {
      $mensajeError = $funcion($datos[0], $datos[1], $datos[2]);
    } else {
      $mensajeError = "Pregúntame más";
    }

    // Verificar si el input es un número

    // Imprimir el resultado de vuelta al cliente
    echo $mensajeError;
  } else {
    echo "Error: Los datos recibidos no son válidos.";
  }
} else {
  // Si no se recibieron datos POST, retornar un mensaje de error
  echo "Error: No se recibieron datos POST";
}
