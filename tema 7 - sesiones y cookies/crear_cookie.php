<?php
// Crear una cookie con PHP
$nombre = "nombre_usuario_php";
$valor = "JaneDoe";
$dias = 1; // La cookie expira en 1 día
$fecha = time() + ($dias * 24 * 60 * 60);
setcookie($nombre, $valor, $fecha, "/"); // Crear la cookie

// Redirigir de vuelta a la página principal
header("Location: index.html");
exit();
