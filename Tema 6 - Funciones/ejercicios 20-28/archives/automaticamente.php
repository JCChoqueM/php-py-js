<?php
include __DIR__ . '/php/imprimir/imprimir.php';
// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  // Verificar si se recibieron datos y que sea un array

  if (is_array($datos) && count($datos) > 0) {
    $mensajeError = "";
    $select = $datos['seleccion'];
    $array = $datos['arrayGenerado'];
    print_r(count($datos));
    print_r($datos);
    if (count($datos) > 2) {
      $extra = $datos['extra'];
      switch ($select) {
        case ($select == "estaEnArrayInt"):
          $mensajeError = imprimirEstaEnArrayInt($array, $extra);
          break;
        case ($select == "posicionEnArray"):
          $mensajeError = imprimirPosicionEnArrayInt($array, $extra);
          break;
        case ($select == "rotaDerechaArrayInt"):
          $mensajeError = imprimirRotaDerechaArrayInt($array, $extra);
          break;
        case ($select == "rotaIzquierdaArrayInt"):
          $mensajeError = imprimirRotaIzquierdaArrayInt($array, $extra);
          break;
        default:
          $mensajeError = "EL 4TO INPUT ESTA MAL";
      }
    } else {
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
          $mensajeError = imprimirMediaArrayInt($array);
          break;

        case ($select == "volteaArrayInt"):
          $mensajeError = imprimirVolteaArrayInt($array);
          break;

        default:
          $mensajeError = "Preugntame mas";
      }
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
