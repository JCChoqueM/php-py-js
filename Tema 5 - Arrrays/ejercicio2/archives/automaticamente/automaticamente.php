<?php
if (isset($_GET["numerosAuto"])) {
  $numero = json_decode($_GET["numerosAuto"]);
  $mensaje = "";
  $contador = 0;
  $max;
  $min;

  $max = $numero[0];
  $min = $numero[0];

  foreach ($numero as $elemento) {
    if ($elemento > $max) {
      $max = $elemento;
    }
    if ($elemento < $min) {
      $min = $elemento;
    }
  }
  $mensaje = " <table border='1'><tr><th>Indice</th><th>Numero</th></tr>";
  $contador = 0;
  foreach ($numero as $elemento) {
    if ($max == $min) {
      $mensaje .= "<tr> <td>$contador</td> <td>$elemento es max y min </td> </tr>";
    } elseif ($elemento == $min) {
      $mensaje .= "<tr> <td>$contador</td> <td>$elemento minimo </td> </tr>";
    } elseif ($elemento == $max) {
      $mensaje .= "<tr> <td>$contador</td> <td>$elemento maximo </td> </tr>";
    } else {
      $mensaje .= "<tr> <td>$contador</td> <td>$elemento </td> </tr>";
    }
    $contador += 1;
  }
  $mensaje .= "</table>";
  echo $mensaje;
}
