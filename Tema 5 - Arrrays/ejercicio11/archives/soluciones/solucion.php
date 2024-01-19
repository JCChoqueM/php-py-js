<?php


$asociativo = [
  "uno" => 11,
  "dos" => 0,
  "tres" => 10,
  "cuatro" => 0,
  "cinco" => 0,
  "seis" => 0,
  "siete" => 0,
  "sota" => 2,
  "caballo" => 3,
  "rey" => 4,
];
$valor = [
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "sota",
  "caballo",
  "rey",
];
$figura = ["oros", "copas", "espadas", "bastos"];

$cartasSacadas =    [];
$puntosSacados = [];
$contadorCartas = 0;
$sumaTotal = 0;

do {
  $randomFigura = $figura[rand(0, 3)];
  $randomValor =  $valor[rand(0, 9)];
  $puntos = $asociativo[$randomValor];
  $nombreCarta = "$randomValor de $randomFigura";
  if (!in_array($nombreCarta, $cartasSacadas)) {
    array_push($cartasSacadas, $nombreCarta);
    array_push($puntosSacados, $puntos);
    $contadorCartas += 1;
    $sumaTotal += $puntos;
  }
} while ($contadorCartas < 10);
// Iniciar la tabla
$mensaje = "<table border='1'><tr>";

$contador = 0;
foreach ($cartasSacadas as $carta) {
  if ($contador % 5     === 0 && $contador > 0) {
    // Cerrar la fila anterior después de mostrar 5 cartas y abrir una nueva fila
    $mensaje .= "</tr><tr>";
  }

  $puntos = $puntosSacados[$contador];

  // Establecer un color de fondo condicional basado en los puntos
  $colorFondo = ($puntos > 0) ? 'background-color: yellow;' : '';

  // Agregar celdas a la fila para cada carta (imagen, nombre y puntos)
  $mensaje .= "<td style='$colorFondo'>";
  $mensaje .= "<table border='1'>";
  $mensaje .= "<tr>";
  $mensaje .= "<td>";
  // Celda para la imagen
  $mensaje .= "<img src='images/" . strtolower(str_replace(" ", "_", $carta)) . ".png' alt='$carta' style='width: 70px; height: 95px;'><br>";

  // Celda para el nombre de la carta
  $mensaje .= "$carta<br>";
  $mensaje .= "</td>";
  $mensaje .= "</tr>";

  $mensaje .= "<tr>";
  $mensaje .= "<td>";

  // Celda para los puntos
  $mensaje .= "$puntos pts.";
  $mensaje .= "</td>";
  $mensaje .= "</tr>";

  $mensaje .= "</table>";
  $mensaje .= "</td>";

  $contador++;
}

// Cerrar la última fila
$mensaje .= "</tr></table><br> La suma total es: $sumaTotal";

echo $mensaje;
