<?php
include __DIR__ . '/../automaticamente/php/imprimir/imprimir.php';
// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  // Verificar si se recibieron datos y que sea un array
  if (is_array($datos) && count($datos) > 0) {
    $select = $datos[0];
    $input1 = ($datos[1]);
    $mensajeError = "";
    switch ($select) {
      case ($select == "esCapicua"):
        $mensajeError = imprimirEscapicua($input1);
        break;
      case ($select == "esPrimo"):
        $mensajeError = imprimirEsPrimo($input1);
        break;
      case ($select == "siguientePrimo"):
        $mensajeError = imprimirSiguientePrimo($input1);
        break;
      case ($select == "potencia"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirPotencia($input1, $input2);
        break;
      case ($select == "digitos"):
        $mensajeError = imprimirDigitos($input1);
        break;
      case ($select == "voltea"):
        $mensajeError = imprimirVoltea($input1);
        break;
      case ($select == "digitoN"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirDigitoN($input1, $input2);
        break;
      case ($select == "posicionDeDigito"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirPosicionDeDigito($input1, $input2);
        break;
      default:
        "Preugntame mas";
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
