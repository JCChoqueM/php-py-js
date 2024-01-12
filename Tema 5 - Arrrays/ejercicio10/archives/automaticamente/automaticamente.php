<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener el cuerpo de la solicitud como JSON y convertirlo a un array asociativo
  $datosJson = json_decode(file_get_contents('php://input'), true);

  // Acceder a los objetos dentro del array asociativo
  $asociativo = $datosJson['asociativo'];
  $valor = $datosJson['valor'];
  $figura = $datosJson['figura'];
  $cartasSacadas = [];
  $contadorCartas = 0;
  $sumaTotal = 0;

  // Iniciar la tabla
  $mensaje = "<table border='1'><tr>";

  do {
    if ($contadorCartas % 5 === 0 && $contadorCartas > 0) {
      // Cerrar la fila anterior después de mostrar 5 cartas y abrir una nueva fila
      if ($contadorCartas > 0) {
        $mensaje .= "</tr><tr>";
      }
    }

    $randomFigura = $figura[rand(0, 3)];
    $randomValor = $valor[rand(0, 9)];
    $puntos = $asociativo[$randomValor];
    $nombreCarta = "$randomValor de $randomFigura";
    $imagenCarta = "images/" . strtolower(str_replace(" ", "_", $nombreCarta)) . ".png";

    if (!in_array($nombreCarta, $cartasSacadas)) {
      // Agregar celdas a la fila para cada carta (imagen, nombre y puntos)
      $mensaje .= "<td>";
      $mensaje .= "<table border='1'>";
      $mensaje .= "<tr>";
      $mensaje .= "<td>";
      // Celda para la imagen
      $mensaje .= "<img src='$imagenCarta' alt='$nombreCarta' style='width: 70px; height: 95px;'><br>";

      // Celda para el nombre de la carta
      $mensaje .= "$nombreCarta<br>";
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


      $cartasSacadas[] = $nombreCarta;
      $contadorCartas += 1;
      $sumaTotal += $puntos;
    }
  } while ($contadorCartas < 10);

  // Cerrar la última fila
  $mensaje .= "</tr></table><br> La suma total es: $sumaTotal";

  echo $mensaje;
} else {
  // Manejar el caso en que la solicitud no sea de tipo POST
  echo 'Método no permitido';
}
