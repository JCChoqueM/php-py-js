<?php
session_start();

$maxIntentos = 4;
$intentos = isset($_SESSION['intentos']) ? $_SESSION['intentos'] : 0;
$codigoCorrecto = "1234"; // Código correcto de la caja fuerte (ejemplo)

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['num1'])) {
  $num1 = $_POST['num1'];

  while ($intentos < $maxIntentos) {
    if ($num1 === $codigoCorrecto) {
      echo "¡Caja fuerte abierta!";
      $_SESSION['intentos'] = 0; // Reiniciar el contador de intentos
      break;
    } else {
      $intentos++;
      echo "Código incorrecto. Intento $intentos de $maxIntentos";
      $_SESSION['intentos'] = $intentos; // Actualizar el contador de intentos en la sesión
      break; // Terminar el bucle while después de cada intento
    }
  }

  if ($intentos >= $maxIntentos) {
    echo "<br>Has superado el máximo de intentos permitidos.";
    $_SESSION['intentos'] = 0; // Reiniciar el contador de intentos
  }
}
