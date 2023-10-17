<?php
if (isset($_GET["numerosAuto"])) {
  $numero = json_decode($_GET["numerosAuto"]);
  $mensaje = "<table border='1'><tr><th>Indice</th><th>Numero</th><th>Rotado</th></tr>";

  $volteado = $numero;
  $aux = array_pop($volteado);
  array_unshift($volteado, $aux);
  foreach ($numero as $indice => $elemento) {
    $descripcion = $elemento;
    $rotar = $volteado[$indice];
    $mensaje .= "<tr><td>$indice</td><td>$descripcion</td><td>$rotar</td></tr>";
  }

  $mensaje .= "</table>";
  echo $mensaje;
}
