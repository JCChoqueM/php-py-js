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
      case ($select == "DecimalHeaxdecimal"):
        $mensajeError = imprimirDecimalHeaxdecimal($input1);
        break;
      case ($select == "DecimalOctal"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirDecimalOctal($input1, $input2);
        break;
      case ($select == "BinarioDecimal"):
        $mensajeError = imprimirBinarioDecimal($input1);
        break;
      case ($select == "BinarioHexadecimal"):
        $mensajeError = imprimirBinarioHexadecimal($input1);
        break;
      case ($select == "BinarioOctal"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirBinarioOctal($input1, $input2);
        break;
      case ($select == "HexadecimalDecimal"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirHexadecimalDecimal($input1, $input2);
        break;
      case ($select == "HexadecimalBinario"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirHexadecimalBinario($input1, $input2);
        break;
      case ($select == "HexadecimalOctal"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirHexadecimalOctal($input1, $input2);
        break;
      case ($select == "OctalDecimal"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirOctalDecimal($input1, $input2);
        break;
      case ($select == "OctalBinario"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirOctalBinario($input1, $input2);
        break;
      case ($select == "OctalHexadecimal"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirOctalHexadecimal($input1, $input2);
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
