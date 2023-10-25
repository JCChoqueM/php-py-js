<?php
$colorCambio1 = "background-color: yellow; color:black";
$colorCambio2 = "background-color: orange; color:black";
$aux = [];
$auxpar = [];
$auximpar = [];
$ordenado = [];
$numero = [];
$mensaje = "";

//SECTION creacion numero random
for ($contador = 0; $contador < 6; $contador++) {
  $numero[$contador] = rand(1, 17);
}
//!SECTION - fin creacion numero random
//SECTION - inicio arrays
foreach ($numero as $elemento) {
  if (abs($elemento) % 2 == 0) {
    array_push($aux, $elemento);
    array_push($auxpar, $elemento);
  }
}
foreach ($numero as $elemento) {
  if (abs($elemento) % 2 == 1) {
    array_push($aux, $elemento);
    array_push($auximpar, $elemento);
  }
}

sort($auxpar);
sort($auximpar);
$ordenado = array_merge($auxpar, $auximpar);
//!SECTION - fin arrays

$mensaje .= "<table border='1'><tr><th>Inidice</th><th>Numero</th><th>Aux</th><th>Ordenado</th></tr>";
foreach ($numero as $contador => $elemento) {
  $mensaje .= "<tr><td>$contador</td>";
  if ($elemento % 2 == 0) {
    $mensaje .= "<td style='$colorCambio1'>$elemento</td>";
  } else {
    $mensaje .= "<td style='$colorCambio2'>$elemento</td>";
  }
  if ($aux[$contador] % 2 == 0) {
    $mensaje .= "<td style='$colorCambio1'>" . $aux[$contador] . "</td>";
  } else {
    $mensaje .= "<td style='$colorCambio2'>" . $aux[$contador] . "</td>";
  }
  if ($ordenado[$contador] % 2 == 0) {
    $mensaje .= "<td style='$colorCambio1'>" . $ordenado[$contador] . "</td>";
  } else {
    $mensaje .= "<td style='$colorCambio2'>" . $ordenado[$contador] . "</td>";
  }
};

$mensaje .= "</tr>";

$mensaje .= "</table>";
$mensaje .= "El array tiene:<br>" . count($auxpar);
$mensaje .= (count($auxpar) != 1) ? " numeros pares y" : " numero par y";
$mensaje .= "<br>" . count($auximpar);
$mensaje .= (count($auximpar) != 1) ? " numeros impares" : " numero impar";
echo $mensaje;
