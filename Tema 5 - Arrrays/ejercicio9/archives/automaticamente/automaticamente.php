<?php
if (isset($_GET["numerosAuto"])) {
  // Decodificar el array de números desde la cadena JSON en la URL
  $numeros = json_decode($_GET["numerosAuto"]);

  $mensaje = "";
  $negativo = 0;
  $colorCambio1 = 'background-color: #2EFE64; color:black';
  $colorCambio2 = 'background-color: #FE2E2E; color:black';
  $colorNegativo = 'background-color: pink; color:black';

  $auxPri = [];
  $auxNoPri = [];
  $aux = [];
  $auxOrde = [];

  // Función para verificar si un número es primo
  function esPrimo($numero)
  {
    if ($numero < 2) {
      return false;
    } elseif ($numero == 2 || $numero == 3) {
      return true;
    } elseif ($numero % 2 == 0) {
      return false;
    } else {
      for ($i = 2; $i * $i <= $numero; $i++) {
        if ($numero % $i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  // Contar números negativos en el array 'numeros'
  foreach ($numeros as $elemento) {
    if ($elemento < 0) {
      $negativo += 1;
    }
  }

  // Separar números primos y no primos en listas auxiliares
  foreach ($numeros as $elemento) {
    if (esPrimo($elemento)) {
      array_push($auxPri, $elemento);
    } else {
      array_push($auxNoPri, $elemento);
    }
  }

  // Combinar listas de primos y no primos
  $aux = array_merge($auxPri, $auxNoPri);

  // Ordenar listas de primos y no primos
  sort($auxPri);
  sort($auxNoPri);

  // Combinar listas ordenadas de primos y no primos
  $auxOrde = array_merge($auxPri, $auxNoPri);

  // Construir la tabla HTML
  $mensaje = "<table border='1' >";
  $filas = [
    ["Índice", array_keys($numeros)],
    ["Matriz", $numeros],
    ["Aux", $aux],
    ["Ordenado", $auxOrde]
  ];

  foreach ($filas as $fila) {
    $titulo = $fila[0];
    $datos = $fila[1];

    $mensaje .= "<tr>";
    $mensaje .= "<th>$titulo</th>";

    if ($titulo !== "Índice") {
      foreach ($datos as $elemento) {
        if ($elemento < 0) {
          $color = $colorNegativo;
        } else {
          $color = esPrimo($elemento) ? $colorCambio1 : $colorCambio2;
        }
        $mensaje .= "<td style='$color'>$elemento</td>";
      }
    } else {
      foreach ($datos as $indice) {
        $mensaje .= "<td>$indice</td>";
      }
    }

    $mensaje .= "</tr>";
  }

  $mensaje .= "</table>";

  // Información adicional sobre el array
  $mensaje .= "El array tiene:<br>";
  $mensaje .= count($auxPri) . ((count($auxPri) != 1) ? " numeros primos, <br>" : " numero primo, <br>");
  $mensaje .= count($auxNoPri) . ((count($auxNoPri) != 1) ? " numeros no primos<br>" : " numero no primo,<br>");
  $mensaje .= $negativo . (($negativo != 1) ? " numeros negativos." : " numero negativo.");

  // Mostrar el mensaje
  echo $mensaje;
}
