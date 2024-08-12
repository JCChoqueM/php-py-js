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
      case ($select == "generaArrayInt"):
        $mensajeError = imprimirGeneraArrayInt($input1);
        break;
      case ($select == "minimoArrayInt"):
        $mensajeError = imprimirMinimoArrayInt($input1);
        break;
      case ($select == "maximoArrayInt"):
        $mensajeError = imprimirMaximoArrayInt($input1);
        break;
      case ($select == "mediaArrayInt"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirMediaArrayInt($input1, $input2);
        break;
      case ($select == "estaEnArrayInt"):
        $mensajeError = imprimirEstaEnArrayInt($input1);
        break;
      case ($select == "posicionEnArray"):
        $mensajeError = imprimirPosicionEnArray($input1);
        break;
      case ($select == "volteaArrayInt"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirVolteaArrayInt($input1, $input2);
        break;
      case ($select == "rotaDerechaArrayInt"):
        $input2 = ($datos[2]);
        $mensajeError = imprimirRotaDerechaArrayInt($input1, $input2);
        break;
      case ($select == "rotaIzquierdaArrayInt"):
        $input2 = ($datos[2]);
        $mensajeError = imprimiRotaIzquierdaArrayInts($input1, $input2);
        break;
      default:
       $mensajeError= "Preugntame mas";
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
