<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener el cuerpo de la solicitud como JSON y convertirlo a un array asociativo
  $datosJson = json_decode(file_get_contents('php://input'), true);

  // Acceder a los objetos dentro del array asociativo
  $asociativo = $datosJson['asociativo'];
  $fruta = $datosJson['fruta'];
  $mensaje = "";

  // Verificar si la fruta existe en el array asociativo
  if (array_key_exists($fruta, $asociativo)) {
    // Construir la tabla HTML con la información de la fruta
    $mensaje .= "<table border='1' style='border-collapse: collapse; text-align: center; background-color: yellow;'>";
    $mensaje .= "<tr>";
    $mensaje .= "<th colspan='2' style='font-size: 2.0em; font-weight: bold;color: green;'>$fruta</th>";
    $mensaje .= "</tr>";
    $mensaje .= "<tr>";
    $mensaje .= "<td style='padding: 10px;'>";
    $mensaje .= "<img src='images/" . strtolower(str_replace(" ", "_", $fruta)) . ".png' alt='$fruta' style='width: 150px; height: 150px;'><br>";
    $mensaje .= "</td>";
    $mensaje .= "</tr>";
    $mensaje .= "<tr>";
    $mensaje .= "<td style='padding: 10px;'>";
    $mensaje .= "<strong style='font-size: 1.2em; '>$fruta en inglés es: <br>" . $asociativo[$fruta] . "</strong> ";
    $mensaje .= "</td>";
    $mensaje .= "</tr>";
    $mensaje .= "</table>";
  } else {
    $mensaje = "<p style='color: red;'>No bromees, $fruta no es una fruta >:(</p>";
  }

  // Mostrar el mensaje
  echo $mensaje;
} else {
  // Manejar el caso en que la solicitud no sea de tipo POST
  echo 'Método no permitido';
}
