<?php
$fruta = $_POST["fruta"];
$mensaje = "";
$asociativo = [
  "manzana" => "Apple",
  "platano" => "Banana",
  "naranja" => "Orange",
  "uva" => "Grape",
  "frutilla" => "Strawberry",
  "mango" => "Mango",
  "kiwi" => "Kiwi",
  "piña" => "Pineapple",
  "cereza" => "Cherry",
  "pera" => "Pear",
  "sandia" => "Watermelon",
  "limon" => "Lemon",
  "granada" => "Pomegranate",
  "ciruela" => "Plum",
  "papaya" => "Papaya",
  "coco" => "coconut",
  "higo" => "Fig",
  "mandarina" => "Tangerine",
  "mora" => "Blackberry",
  "guayaba" => "Guava",
  "pomelo" => "Grapefruit",
  "durazno" => "peach",
];
if (array_key_exists($fruta, $asociativo)) {
  // Construir la tabla HTML con la información de la fruta
  $mensaje .= "<table border='1' style='border-collapse: collapse; text-align: center; background-color: yellow;'>";
  $mensaje .= "<tr>";
  $mensaje .= "<th colspan='2' style='font-size: 2.0em; font-weight: bold;color: green;'>$fruta</th>";
  $mensaje .= "</tr>";
  $mensaje .= "<tr>";
  $mensaje .= "<td style='padding: 10px;'>";
  $mensaje .= "<img src='images/" . strtolower(str_replace(" ", "_", $fruta)) . ".png' alt='$fruta' style='width: 150px; height: 150px;'><br>";
  $mensaje .= "</td>";
  $mensaje .= "</tr>";
  $mensaje .= "<tr>";
  $mensaje .= "<td style='padding: 10px;'>";
  $mensaje .= "<strong style='font-size: 1.2em; '>$fruta en inglés es: <br>" . $asociativo[$fruta] . "</strong> ";
  $mensaje .= "</td>";
  $mensaje .= "</tr>";
  $mensaje .= "</table>";
} else {
  $mensaje = "<p style='color: red;'>No bromees, $fruta no es una fruta >:(</p>";
}

// Mostrar el mensaje
echo $mensaje;
