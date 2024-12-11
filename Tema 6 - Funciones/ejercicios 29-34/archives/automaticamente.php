<?php
include __DIR__ . '/php/imprimir/imprimir.php';

// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);

  // Verificar si se recibieron datos y que sea un array
  if (is_array($datos) && !empty($datos)) {
    $mensajeError = "";
    $select = $datos['seleccion'];
    $array = $datos['arrayGenerado'];
    $extra = isset($datos['extra']) ? $datos['extra'] : null;

    // Obtener la función correspondiente
    $funcion = obtenerFuncion($select);

    // Verificar si la función existe y llamarla
    if ($funcion && function_exists($funcion)) {
      $mensajeError = $extra !== null ? $funcion($array, $extra) : $funcion($array);
    } else {
      $mensajeError = "Selección no válida.";
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


function obtenerFuncion($accion)
{
  $mapaFunciones = [
    "estaEnArrayInt" => "imprimirEstaEnArrayInt",
    "posicionEnArrayInt" => "imprimirPosicionEnArrayInt",
    "rotaDerechaArrayInt" => "imprimirRotaDerechaArrayInt",
    "rotaIzquierdaArrayInt" => "imprimirRotaIzquierdaArrayInt",
    "generaArrayInt" => "imprimirGenerarArrayInt",
    "minimoArrayInt" => "imprimirMinimoArrayInt",
    "maximoArrayInt" => "imprimirMaximoArrayInt",
    "mediaArrayInt" => "imprimirMediaArrayInt",
    "volteaArrayInt" => "imprimirVolteaArrayInt",
  ];

  return isset($mapaFunciones[$accion]) ? $mapaFunciones[$accion] : null;
}









