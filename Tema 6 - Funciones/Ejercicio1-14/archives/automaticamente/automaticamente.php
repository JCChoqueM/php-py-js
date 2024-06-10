<?php
include __DIR__ . '/../automaticamente/php/funciones.php';
// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  echo hola2();
  // Verificar si se recibieron datos y que sea un array
  if (is_array($datos) && count($datos) > 0) {
    $input1 = $datos[1];
    $mensajeError = "";

    // Verificar si el input es un número
    if (!is_numeric($input1)) {
      $mensajeError = "0-El campo está vacío o no es un número. Por favor, ingrese número(s).";
    } else {
      $input1 = (int) $input1; // Convertir a entero
      $esValido = ($input1 >= 0 && $input1 <= 9) || ($input1 >= -9 && $input1 <= -1);

      if ($esValido) {
        if ($input1 >= 0) {
          $mensajeError = "<span>El numero $input1 es un palíndromo.</span>";
        } else {
          $mensajeError = "<span>El número $input1 es negativo, pero al ignorar el signo, " . abs($input1) . " es un palíndromo.</span>";
        }
      } else {
        if ($input1 >= 0) {
          $mensajeError = "<span>Continuar</span>";
        } else {
          $mensajeError = "<span>El número $input1 es negativo, pero al ignorar el signo, " . abs($input1) . " es: Continuar</span>";
        }
      }
    }

    // Imprimir el resultado de vuelta al cliente
    echo $mensajeError;
  } else {
    echo "Error: Los datos recibidos no son válidos.";
  }
} else {
  // Si no se recibieron datos POST, retornar un mensaje de error
  echo "Error: No se recibieron datos POST";
}
