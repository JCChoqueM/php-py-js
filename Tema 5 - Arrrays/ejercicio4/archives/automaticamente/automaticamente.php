<?php

if (isset($_POST["miArray"])) {
  $numero = json_decode($_POST["miArray"]);
  $buscar = $_POST["num1"];
  $reemplazar = $_POST["num2"];
  $cambio = [];
  $mensaje = "<table border='1'><tr><th>Indice</th><th>Numero</th><th>Cambio</th></tr>";
  foreach ($numero as $indice => $elemento) {
    $descripcion=$elemento;
    if ($elemento== $buscar) {
      $elemento = $reemplazar;
      $mensaje .= "<tr><td>$indice</td><td>$descripcion</td><td>$elemento</td></tr>";
    } else {

      $mensaje .= "<tr><td>$indice</td><td>$descripcion</td><td>$elemento</td></tr>";
    }
  }

  $mensaje .= "</table>";
  echo $mensaje;
}
