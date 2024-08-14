<?php
include __DIR__ . '/php/imprimir/imprimir.php';
// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  // Verificar si se recibieron datos y que sea un array

  if (is_array($datos) && count($datos) > 0) {
    $select = $datos['seleccion'];
    $array = $datos['arrayGenerado'];


    $mensajeError = "";
    switch ($select) {
      case ($select == "generaArrayInt"):
        $mensajeError = imprimirGenerarArrayInt($array);
        break;
            case ($select == "minimoArrayInt"):
        $mensajeError = imprimirMinimoArrayInt($array);
        break;
      case ($select == "maximoArrayInt"):
        $mensajeError = imprimirMaximoArrayInt($array);
        break;
      case ($select == "mediaArrayInt"):
        $mensajeError = imprimirMediaArrayInt($array, $input2);
        break;
      case ($select == "estaEnArrayInt"):
        $mensajeError = imprimirEstaEnArrayInt($array);
        break;
      case ($select == "posicionEnArray"):
        $mensajeError = imprimirPosicionEnArrayInt($array);
        break;
      case ($select == "volteaArrayInt"):
        $mensajeError = imprimirVolteaArrayInt($array, $input2);
        break;
      case ($select == "rotaDerechaArrayInt"):
        $mensajeError = imprimirRotaDerechaArrayInt($array, $input2);
        break;
      case ($select == "rotaIzquierdaArrayInt"):
        $mensajeError = imprimirRotaIzquierdaArrayInt($array, $input2);
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
