<?php
if (isset($_POST["miArray"])) {
  $mensaje = "";
  $numero = json_decode($_POST["miArray"]);
  $colorCambio1 = 'background-color: yellow; color:black';
  $colorCambio2 = 'background-color: orange; color:black';
  $aux = [];
  $aux2 = [];
  $i = 0;
  foreach ($numero as $indice => $elemento) {
    if (abs($elemento) % 2 == 0) {
      $aux[$i] = $elemento;
      $auxpar[$indice] = $elemento;
      $i += 1;
    }
  }
  foreach ($numero as $indice => $elemento) {
    if (abs($elemento) % 2 == 0) {
    } else {
      $aux[$i] = $elemento;
      $auximpar[$indice] = $elemento;
      $i += 1;
    }
  }
  sort($auxpar);
  sort($auximpar);
  $ordenado = array_merge($auxpar, $auximpar);

  $mensaje = "<table border='1' >";
  //SECTION - fila indice
  $mensaje .= "<tr>";
  $mensaje .= "<th >Índice</th>";

  foreach ($numero as $indice => $elemento) {
    $mensaje .= "<th> $indice </th>";
  }
  $mensaje .= "</tr>";
  //!SECTION fin fila indice

  //SECTION - inicio fila matriz
  $mensaje .= "<tr>";
  $mensaje .= "<td >Matriz</td>";

  foreach ($numero as $indice => $valorArray) {
    if ($valorArray % 2 == 0) {
      $mensaje .= "<td style='$colorCambio1'> $valorArray  </td>";
    } else {
      $mensaje .= "<td style='$colorCambio2'> $valorArray </td>";
    }
  }

  $mensaje .= "</tr>";
  //!SECTION fin fila matriz
  //SECTION - inicio fila aux
  $mensaje .= "<tr>";
  $mensaje .= "<td >Aux</td>";

  foreach ($aux as $indice => $valorArray2) {
    if ($valorArray2 % 2 == 0) {
      $mensaje .= "<td style='$colorCambio1'> $valorArray2 </td>";
    } else {
      $mensaje .= "<td style='$colorCambio2'> $valorArray2 </td>";
    }
  }

  $mensaje .= "</tr>";
  //!SECTION fin fila aux

  //SECTION - inicio fila ordenado
  $mensaje .= "<tr>";
  $mensaje .= "<td >ordenado</td>";
  foreach ($ordenado as $indice => $valorArray2) {
    if ($valorArray2 % 2 == 0) {
      $mensaje .= "<td style='$colorCambio1'> $valorArray2 </td>";
    } else {
      $mensaje .= "<td style='$colorCambio2'> $valorArray2 </td>";
    }
  }

  $mensaje .= "</tr>";
  //!SECTION fin fila ordenado

  $mensaje .= "</table>";

  echo $mensaje;
} else {
  $mensaje = "Debe llenar ambos formularios";
  echo $mensaje;
}
