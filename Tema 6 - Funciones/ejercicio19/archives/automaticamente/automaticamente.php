<?php
include __DIR__ . '/../automaticamente/php/imprimir/imprimir.php';
// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  // Verificar si se recibieron datos y que sea un array
  if (is_array($datos) && count($datos) > 0) {
    $select = $datos[1] == $datos[2] ? "Iguales" : $datos[1] . $datos[2];

    switch ($select) {
      case ($select == "Iguales"):
        $mensajeError = imprimirIguales($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "DecimalBinario"):
        $mensajeError = imprimirDecimalBinario($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "DecimalHexadecimal"):
        $mensajeError = imprimirDecimalHeaxdecimal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "DecimalOctal"):
        $mensajeError = imprimirDecimalOctal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "BinarioDecimal"):
        $mensajeError = imprimirBinarioDecimal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "BinarioHexadecimal"):
        $mensajeError = imprimirBinarioHexadecimal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "BinarioOctal"):
        $mensajeError = imprimirBinarioOctal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "HexadecimalDecimal"):
        $mensajeError = imprimirHexadecimalDecimal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "HexadecimalBinario"):
        $mensajeError = imprimirHexadecimalBinario($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "HexadecimalOctal"):
        $mensajeError = imprimirHexadecimalOctal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "OctalDecimal"):
        $mensajeError = imprimirOctalDecimal($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "OctalBinario"):
        $mensajeError = imprimirOctalBinario($datos[0], $datos[1], $datos[2]);
        break;
      case ($select == "OctalHexadecimal"):
        $mensajeError = imprimirOctalHexadecimal($datos[0], $datos[1], $datos[2]);
        break;
      default:
        $mensajeError = "Preugntame mas";
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
