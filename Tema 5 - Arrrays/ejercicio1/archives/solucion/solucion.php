<?php
$mensaje = "";
for ($contador = 0; $contador < 6; $contador++) {
  $numero[$contador] = rand(0, 100);
}
foreach ($numero as $elemento) {
  $cuadrado[] = pow($elemento, 2);
  $cubo[] = pow($elemento, 3);
}
$mensaje .= " <table border='1'><tr><th>Nº</th><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>";
for ($contador = 0; $contador < 6; $contador++) {
  $mensaje .= "<tr>
  <td>" . ($contador + 1) . "</td>
  <td>$numero[$contador]</td>
  <td>$cuadrado[$contador]</td>
  <td>$cubo[$contador]</td>
  </tr>";
}
$mensaje .= "</table>";
echo $mensaje;
