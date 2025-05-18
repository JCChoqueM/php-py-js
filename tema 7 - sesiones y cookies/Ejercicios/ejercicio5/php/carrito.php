<?php
session_start();

header('Content-Type: application/json');

$productos = [
  "patitoBatman" => ["nombre" => "Patito Batman", "precio" => 54],
  "patitoSuperman" => ["nombre" => "Patito Superman", "precio" => 40],
  "patitoJoker" => ["nombre" => "Patito Joker", "precio" => 18],
  "patitoRobin" => ["nombre" => "Patito Robin", "precio" => 10],
];

if (!isset($_SESSION['carritoPHP'])) {
  $_SESSION['carritoPHP'] = [
    "patitoBatman" => 0,
    "patitoSuperman" => 0,
    "patitoJoker" => 0,
    "patitoRobin" => 0,
  ];
}

$carrito = &$_SESSION['carritoPHP'];

$action = $_GET['action'] ?? '';

switch ($action) {
  case 'mostrar':
    echo json_encode(['carrito' => $carrito]);
    break;

  case 'agregar':
    $codigo = $_POST['codigo'] ?? '';
    $cantidad = intval($_POST['cantidad'] ?? 0);
    if (array_key_exists($codigo, $productos) && $cantidad > 0) {
      $carrito[$codigo] += $cantidad;
    }
    echo json_encode(['carrito' => $carrito]);
    break;

  case 'cambiar':
    $codigo = $_POST['codigo'] ?? '';
    $delta = intval($_POST['delta'] ?? 0);
    if (array_key_exists($codigo, $productos)) {
      $carrito[$codigo] += $delta;
      if ($carrito[$codigo] < 0) {
        $carrito[$codigo] = 0;
      }
    }
    echo json_encode(['carrito' => $carrito]);
    break;

  case 'eliminar':
    $codigo = $_POST['codigo'] ?? '';
    if (array_key_exists($codigo, $productos)) {
      $carrito[$codigo] = 0;
    }
    echo json_encode(['carrito' => $carrito]);
    break;

  case 'vaciar':
    foreach ($carrito as $codigo => &$cantidad) {
      $cantidad = 0;
    }
    echo json_encode(['carrito' => $carrito]);
    break;

  default:
    echo json_encode(['error' => 'Acción no válida']);
    break;
}
