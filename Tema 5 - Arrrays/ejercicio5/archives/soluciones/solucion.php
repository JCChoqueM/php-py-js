<?php
$mensaje = "";
$contador = 0;

//SECTION creacion numero random
for ($contador = 0; $contador < 6; $contador++) {
  $numero[$contador] = rand(1, 17);
}
//!SECTION - fin creacion numero random

//SECTION - inicio  array auxiliar
$longitud = count($numero);
$aux[0] = $numero[$longitud - 1];
for ($contador = 0; $contador < $longitud - 1; $contador++) {
  $aux[$contador + 1] = $numero[$contador];
}
//!SECTION fin array auxiliar

$mensaje = " <table border='1'><tr><th>Indice</th><th>Numero</th><th>Rotar</th></tr>";
for ($contador = 0; $contador < $longitud; $contador++) {
  $descripcion = $numero[$contador];
  $rotar = $aux[$contador];
  $mensaje .= "<tr><td>$contador</td><td>$descripcion</td><td>$rotar</td></tr>";
}
$mensaje .= "</table>";
echo $mensaje;
