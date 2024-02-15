<?php
$lineal = [];
$i = 0;

do {
  $n = rand(100, 999);
  if (!in_array($n, $lineal)) {
    $lineal[] = $n;
    $i++;
  }
} while ($i < 54);

$minimo = 999;
$i = 0;
$xMinimo;
$yMinimo;
$numero = [];

for ($x = 0; $x < 6; $x++) {
  $numero[$x] = [];
  for ($y = 0; $y < 9; $y++) {
    $numero[$x][$y] = $lineal[$i];
    $i++;
    if ($numero[$x][$y] < $minimo) {
      $minimo = $numero[$x][$y];
      $xMinimo = $x;
      $yMinimo = $y;
    }
  }
}
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
      $colorFondo = (($x + $y) % 2 == 0) ? '' : 'grey';
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
  $mensaje .= "<br>El valor mínimo es $minimo<br> en la pocision [$xMinimo][$yMinimo] ";

  echo $mensaje;

