<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener el cuerpo de la solicitud como JSON y convertirlo a un array asociativo
  $datosJson = json_decode(file_get_contents('php://input'), true);

  // Acceder a los objetos dentro del array asociativo
  $mensaje = "";
  $numero = $datosJson['numero'];
  $minimo = $datosJson['minimo'];
  $xMinimo = $datosJson['xMinimo'];
  $yMinimo = $datosJson['yMinimo'];
  $mensaje = "<table border='1'>";
  // Añadir fila de índices de columna arriba de la tabla
  $mensaje .= "<tr>";
  $mensaje .= "<td></td>"; // Celda vacía para ajustar el índice de fila
  for ($y = 0; $y < 9; $y++) {
    $mensaje .= "<td style='background-color: yellow;'>$y</td>";
  }
  $mensaje .= "</tr>";
  for ($x = 0; $x < 6; $x++) {
    $mensaje .= "<tr>";
    // Añadir índice de fila a la izquierda de la fila
    $mensaje .= "<td style='background-color: orange;'>" . "&nbsp;&nbsp" . $x . "</td>";
    for ($y = 0; $y < 9; $y++) {
      // Determinar el color de fondo basado en la posición de la celda
      $colorFondo = (($x + $y) % 2 == 0) ? 'white' : 'grey';
      if ($numero[$x][$y] == $minimo) {
        $mensaje .= "<td style='background-color: #33E9FF; color: black;'>" . $numero[$x][$y] . "</td>";
      } else if (abs((abs($x) - abs($xMinimo))) == abs(abs($y) - abs($yMinimo))) {
        $mensaje .= "<td style='background-color: green;'>" . $numero[$x][$y] . "</td>";
      } else {
        $mensaje .= "<td style='background-color: $colorFondo;'>" . $numero[$x][$y] . "</td>";
      }
    }
    $mensaje .= "</tr>";
  }
  $mensaje .= "</table>";
  $mensaje.="<br>El valor mínimo es $minimo<br> en la pocision [$xMinimo][$yMinimo] ";

  echo $mensaje;
} else {
  // Manejar el caso en que la solicitud no sea de tipo POST
  echo 'Método no permitido';
}
