<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener el cuerpo de la solicitud como JSON y convertirlo a un array asociativo
  $datosJson = json_decode(file_get_contents('php://input'), true);

  // Acceder a los objetos dentro del array asociativo
  $asociativo = $datosJson['asociativo'];
  $input = [
    $input1 = $datosJson['input1'],
    $input2 = $datosJson['input2'],
    $input3 = $datosJson['input3']
  ];
  $clavesUtilizadas = $datosJson['clavesUtilizadas'];
  $valoresUtilizados = $datosJson['valoresUtilizados'];
  $mensaje = "";
  $correcto = 0;
  $incorrecto = 0;
  $mensaje = "<table border='1'  style='text-align:center';><tr>";
  foreach ($input as $indice => $valor) {
    $colorFondo = ($valor == $valoresUtilizados[$indice]) ? 'color: green;' : 'color: red;';
   
    $mensaje .= "<td>";
    $mensaje .= "<span style='font-size: 25px;'>". $clavesUtilizadas[$indice]." </span><br>";
    $mensaje .= "<table border='1'>";
    $mensaje .= "<tr>";
    $mensaje .= "<td>";
    // Celda para la imagen
    $mensaje .= "<img src='images/" . strtolower(str_replace(" ", "_", $clavesUtilizadas[$indice])) . ".png' alt='$clavesUtilizadas[$indice]' style='width: 130px; height: 165px;'><br>";

    // Celda para el nombre de la valor
    $mensaje .= "</td>";
    $mensaje .= "</tr>";

    $mensaje .= "<tr>";
    $mensaje .= "<td style='height: 75px; text-align: center; font-size: 17px;'>";

    // Celda para los puntos
    $mensaje .= $input[$indice];
    if ($valor == $valoresUtilizados[$indice]) {
      $correcto += 1;
      $mensaje.="<br><span style='$colorFondo;'>correcto</span>";
    } else {
      $incorrecto += 1;
      $mensaje.= "<br><span style='$colorFondo;'>incorrecto</span><br>la traduccion es:<br>". $valoresUtilizados[$indice];
    }
    $mensaje .= "</td>";
    $mensaje .= "</tr>";

    $mensaje .= "</table>";
    $mensaje .= "</td>";
  }
  $mensaje .= "</tr></table><br> correctos: $correcto<br>Incorrectos:$incorrecto";

  echo $mensaje;

} else {
  // Manejar el caso en que la solicitud no sea de tipo POST
  echo 'Método no permitido';
}
