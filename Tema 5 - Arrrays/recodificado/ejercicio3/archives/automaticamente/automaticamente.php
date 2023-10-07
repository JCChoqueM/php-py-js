<?php
if (isset($_GET["numerosAuto"])) {
  $numero = json_decode($_GET["numerosAuto"]);
  $mensaje = "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>";

  $max = max($numero);
  $min = min($numero);

  foreach ($numero as $indice => $elemento) {
    $descripcion = $elemento;
    if ($elemento == $min && $elemento == $max) {
      $descripcion = "$elemento es max y min";
    } elseif ($elemento == $min) {
      $descripcion = "$elemento mínimo";
    } elseif ($elemento == $max) {
      $descripcion = "$elemento máximo";
    } 
    $mensaje .= "<tr><td>$indice</td><td>$descripcion</td></tr>";
  }

  $mensaje .= "</table>";
  echo $mensaje;
}
