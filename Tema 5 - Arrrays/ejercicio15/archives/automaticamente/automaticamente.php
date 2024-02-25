<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener el cuerpo de la solicitud como JSON y convertirlo a un array asociativo
  $datosJson = json_decode(file_get_contents('php://input'), true);

  // Acceder a los objetos dentro del array asociativo
  $mensaje = "";
  $bidimencional = $datosJson['numero'];

  function imprimirTabla($numero)
  {
    $mensaje = "<table border='1'>";
    // Añadir fila de índices de columna arriba de la tabla
    $mensaje .= "<tr>";
    $mensaje .= "<td></td>"; // Celda vacía para ajustar el índice de fila
    for (
      $y = 0;
      $y < 12;
      $y++
    ) {
      $mensaje .= "<td style='background-color: yellow;'>$y</td>";
    }
    $mensaje .= "</tr>";
    for ($x = 0; $x < 12; $x++) {
      $mensaje .= "<tr>";
      // Añadir índice de fila a la izquierda de la fila
      $mensaje .= "<td style='background-color: orange;'>" . "&nbsp;&nbsp" . $x . "</td>";
      for ($y = 0; $y < 12; $y++) {
        // Determinar el color de fondo basado en la posición de la celda
        $colorFondo = getColorFondo($x, $y);
        $mensaje .= "<td style='background-color: $colorFondo;'>" . $numero[$x][$y] . "</td>";
      }
      $mensaje .= "</tr>";
    }
    $mensaje .= "</table>";
    return $mensaje;
  }
  function rotarTabla($numero)
  {
    $mensaje = "<table border='1'>";
    // Añadir fila de índices de columna arriba de la tabla
    $mensaje .= "<tr>";
    $mensaje .= "<td></td>"; // Celda vacía para ajustar el índice de fila
    for (
      $y = 0;
      $y < 12;
      $y++
    ) {
      $mensaje .= "<td style='background-color: yellow;'>$y</td>";
    }
    $mensaje .= "</tr>";
    for ($x = 0; $x < 12; $x++) {
      $mensaje .= "<tr>";
      // Añadir índice de fila a la izquierda de la fila
      $mensaje .= "<td style='background-color: orange;'>" . "&nbsp;&nbsp" . $x . "</td>";
      for ($y = 0; $y < 12; $y++) {
        // Determinar el color de fondo basado en la posición de la celda
        $colorFondo = getColorFondo($x, $y);
        $mensaje .= "<td style='background-color: $colorFondo;'>" . $numero[$x][$y] . "</td>";
      }
      $mensaje .= "</tr>";
    }
    $mensaje .= "</table>";
    return $mensaje;
  }
  function getColorFondo($x, $y)
  {
    if (($x == 0 || $x == 11) || ($y == 11 || $y == 0)
    ) {
      return $x == 0 && $y == 0 ? "#1EA50E" : "#49FF33";
    } elseif (($x == 1 || $x == 10) || ($y == 10 || $y == 1)) {
      return $x == 1 && $y == 1 ? "#5C39D2" : "#7F5FEE";
    } elseif (($x == 2 || $x == 9) || ($y == 9 || $y == 2)) {
      return $x == 2 && $y == 2 ? "#F16C09" : "#DC7F3A";
    } elseif (($x == 3 || $x == 8) || ($y == 8 || $y == 3)) {
      return $x == 3 && $y == 3 ? "#A41B0C" : "#AA3629";
    } elseif (($x == 4 || $x == 7) || ($y == 7 || $y == 4)) {
      return $x == 4 && $y == 4 ? "#CB315C" : "#C94D70";
    } elseif (($x == 5 || $x == 6) || ($y == 6 || $y == 5)) {
      return $x == 5 && $y == 5 ? "#FFC300" : "#DBE337";
    } else {
      return "";
    }
  }
  function getColorFondo2($x, $y)
  {
    if (($x == 0 || $x == 11) || ($y == 11 || $y == 0)
    ) {
      return $x == 0 && $y == 1 ? "#1EA50E" : "#49FF33";
    } elseif (($x == 1 || $x == 10) || ($y == 10 || $y == 1)) {
      return $x == 1 && $y == 2 ? "#5C39D2" : "#7F5FEE";
    } elseif (($x == 2 || $x == 9) || ($y == 9 || $y == 2)) {
      return $x == 2 && $y == 3 ? "#F16C09" : "#DC7F3A";
    } elseif (($x == 3 || $x == 8) || ($y == 8 || $y == 3)) {
      return $x == 3 && $y == 4 ? "#A41B0C" : "#AA3629";
    } elseif (($x == 4 || $x == 7) || ($y == 7 || $y == 4)) {
      return $x == 4 && $y == 5 ? "#CB315C" : "#C94D70";
    } elseif (($x == 5 || $x == 6) || ($y == 6 || $y == 5)) {
      return $x == 5 && $y == 6 ? "#FFC300" : "#DBE337";
    } else {
      return "";
    }
  }


  echo  (imprimirTabla($bidimencional)."<br>");
  echo rotarTabla(($bidimencional));
} else {
  // Manejar el caso en que la solicitud no sea de tipo POST
  echo 'Método no permitido';
}




        /*    if ($numero[$x][$y] == $minimo) {
              $mensaje .= "<td style='background-color: #33E9FF; color: black;'>" . $numero[$x][$y] . "</td>";
            } else if (abs((abs($x) - abs($xMinimo))) == abs(abs($y) - abs($yMinimo))) {
              $mensaje .= "<td style='background-color: green;'>" . $numero[$x][$y] . "</td>";
            } else {
              $mensaje .= "<td style='background-color: $colorFondo;'>" . $numero[$x][$y] . "</td>";
            } */