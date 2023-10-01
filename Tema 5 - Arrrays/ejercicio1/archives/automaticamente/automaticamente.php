<?php
if (isset($_GET["numerosAuto"])) {
  $numero = json_decode($_GET["numerosAuto"]);
  $mensaje = "";
  foreach ($numero as $elemento) {
    $cuadrado[] = pow($elemento, 2);
    $cubo[] = pow($elemento, 3);
  }
  $mensaje .= " <table border='1'><tr><th>Nº</th><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>";
  for ($contador = 0; $contador < 7; $contador++) {
    $mensaje .= "<tr>
  <td>" . ($contador + 1) . "</td>
  <td>$numero[$contador]</td>
  <td>$cuadrado[$contador]</td>
  <td>$cubo[$contador]</td>
  </tr>";
  }
  $mensaje .= "</table>";
  echo $mensaje;
}
