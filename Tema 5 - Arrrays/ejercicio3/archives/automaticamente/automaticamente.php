<?php
if (isset($_GET["numerosAuto"])) {
  $numero = json_decode($_GET["numerosAuto"]);
  $mensaje = "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>";

  $max = max($numero);
  $min = min($numero);

  foreach ($numero as $indice => $elemento) {
    $mensaje .= "<tr><td>$indice</td>";
    
    if ($max == $min) {
      $mensaje .= "<td>$elemento es max y min</td>";
    } elseif ($elemento == $min) {
      $mensaje .= "<td>$elemento mínimo</td>";
    } elseif ($elemento == $max) {
      $mensaje .= "<td>$elemento máximo</td>";
    } else {
      $mensaje .= "<td>$elemento</td>";
    }

    $mensaje .= "</tr>";
  }
  
  $mensaje .= "</table>";
  echo $mensaje;
}
