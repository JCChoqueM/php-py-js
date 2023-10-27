<?php
if (isset($_GET["numerosAuto"])) {
  $numeros = json_decode($_GET["numerosAuto"]);
  $mensaje = "";
  $mensaje .= " <table border='1'><tr><th>Indice</th><th>Numero</th><th>Color</th></tr>";
  foreach ($numeros as $indice => $elemento) {
    if (abs($elemento) % 2 == 0) {
      $colorCambio = 'background-color: yellow; color:black';
      $signo = " es par";
    } else {
      $colorCambio = 'background-color: orange; color:black';
      $signo = "es impar";
    }
    $mensaje .= "<tr><td style='$colorCambio'>$indice</td><td style='$colorCambio'>$elemento</td><td style='$colorCambio'>$elemento $signo</td></tr>";
  }
  $mensaje .= "</table>";
  echo $mensaje;
}
