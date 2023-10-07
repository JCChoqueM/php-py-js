<?php
$mensaje = "";
$contador = 0;
$max;
$min;
for ($contador = 0; $contador < 6; $contador++) {
  $numero[$contador] = rand(-2, 10);
}
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
