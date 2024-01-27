<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener el cuerpo de la solicitud como JSON y convertirlo a un array asociativo
  $datosJson = json_decode(file_get_contents('php://input'), true);

  // Acceder a los objetos dentro del array asociativo
  $cartasSacadas = $datosJson['cartasSacadas'];
  $puntosSacados = $datosJson['puntosSacados'];
  $sumaTotal = $datosJson['sumaTotal'];
 

  // Iniciar la tabla
  $mensaje = "<table border='1'><tr>";

  $contador = 0;
  foreach ($cartasSacadas as $carta) {
    if ($contador % 5 === 0 && $contador > 0) {
      // Cerrar la fila anterior después de mostrar 5 cartas y abrir una nueva fila
      $mensaje .= "</tr><tr>";
    }

    $puntos = $puntosSacados[$contador];

    // Establecer un color de fondo condicional basado en los puntos
    $colorFondo = ($puntos > 0) ? 'background-color: yellow;' : '';

    // Agregar celdas a la fila para cada carta (imagen, nombre y puntos)
    $mensaje .= "<td style='$colorFondo'>";
    $mensaje .= "<table border='1'>";
    $mensaje .= "<tr>";
    $mensaje .= "<td>";
    // Celda para la imagen
    $mensaje .= "<img src='images/" . strtolower(str_replace(" ", "_", $carta)) . ".png' alt='$carta' style='width: 70px; height: 95px;'><br>";

    // Celda para el nombre de la carta
    $mensaje .= "$carta<br>";
    $mensaje .= "</td>";
    $mensaje .= "</tr>";

    $mensaje .= "<tr>";
    $mensaje .= "<td>";

    // Celda para los puntos
    $mensaje .= "$puntos pts.";
    $mensaje .= "</td>";
    $mensaje .= "</tr>";

    $mensaje .= "</table>";
    $mensaje .= "</td>";

    $contador++;
  }

  // Cerrar la última fila
  $mensaje .= "</tr></table><br> La suma total es: $sumaTotal";

  echo $mensaje;
} else {
  // Manejar el caso en que la solicitud no sea de tipo POST
  echo 'Método no permitido';
}
