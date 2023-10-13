<?php
if (isset($_POST["miArray"]) && ($_POST["num1"] !== "" || $_POST["num1"] === "0") && ($_POST["num2"] !== "" || $_POST["num2"] === "0")) {

  $numero = json_decode($_POST["miArray"]);
  $buscar = $_POST["num1"];
  $reemplazar = $_POST["num2"];
  if($buscar==$reemplazar){
    $colorCambio = 'background-color: orange; color:black';
  }else{
    $colorCambio = 'background-color: yellow; color:black';
  }
  $mensaje = "<table border='1'><tr><th>Indice</th><th>Numero</th><th>Cambio</th></tr>";
  if (in_array($buscar, $numero)) {
    foreach ($numero as $indice => $elemento) {
      $descripcion = $elemento;
      if ($elemento == $buscar) {
        $elemento = $reemplazar;
        $mensaje .= "<tr><td style='$colorCambio'>$indice</td><td style='$colorCambio'>$descripcion</td><td style='$colorCambio'>$elemento</td></tr>";
      } else {
        $mensaje .= "<tr><td>$indice</td><td>$descripcion</td><td>$elemento</td></tr>";
      }
    }
  } else {
    $mensaje = "No se encontro el  numero $buscar en los números: ";
    $mensaje .= "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>";
    foreach ($numero as $indice => $elemento2) {
      $descripcion = $elemento2;
      $mensaje .= "<tr><td>$indice</td><td>$descripcion</td></tr>";
    }
  }
  $mensaje .= "</table>";
  echo $mensaje;
} else {
  $mensaje = "Debe llenar ambos formularios";
  echo $mensaje;
}
