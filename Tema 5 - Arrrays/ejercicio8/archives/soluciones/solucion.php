<?php
// Inicializar variables
$mensaje = "";

// Generar 6 números aleatorios y almacenarlos en el array 'numeros'
for ($contador = 0; $contador < 6; $contador++) {
  $numeros[$contador] = rand(-5, 25);
}

$mensaje = "";
$negativo = 0;
$colorCambio1 = 'background-color: #2EFE64; color:black'; // Estilo para números primos
$colorCambio2 = 'background-color: #FE2E2E; color:black'; // Estilo para números no primos
$colorNegativo = 'background-color: pink; color:black';  // Estilo para números negativos

$auxPri = [];    // Array para almacenar números primos
$auxNoPri = [];  // Array para almacenar números no primos
$aux = [];       // Array auxiliar para combinación de primos y no primos
$auxOrde = [];   // Array para almacenar números ordenados

// Función para determinar si un número es primo
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

// Separar números primos y no primos en arrays auxiliares
foreach ($numeros as $elemento) {
  if (esPrimo($elemento)) {
    array_push($auxPri, $elemento);
  } else {
    array_push($auxNoPri, $elemento);
  }
}

// Combinar arrays de primos y no primos
$aux = array_merge($auxPri, $auxNoPri);

// Ordenar arrays de primos y no primos
sort($auxPri);
sort($auxNoPri);

// Combinar arrays ordenados de primos y no primos
$auxOrde = array_merge($auxPri, $auxNoPri);

// Crear una cadena con los números ingresados separados por comas
$ingresado = implode(", ", $numeros);
echo "Números ingresados PHP: <br>" . $ingresado . ".<br>";

$mensaje = "<table border='1' >";
$filas = [
  ["Índice", array_keys($numeros)],
  ["Matriz", $numeros],
  ["Aux", $aux],
  ["Ordenado", $auxOrde]
];

// Construir la tabla HTML
foreach ($filas as $fila) {
  $titulo = $fila[0];
  $datos = $fila[1];

  $mensaje .= "<tr>";
  $mensaje .= "<th>$titulo</th>";

  if ($titulo !== "Índice") {
    // Aplicar estilos y mostrar datos para cada celda
    foreach ($datos as $elemento) {
      if ($elemento < 0) {
        $color = $colorNegativo;
      } else {
        $color = esPrimo($elemento) ? $colorCambio1 : $colorCambio2;
      }
      $mensaje .= "<td style='$color'>$elemento</td>";
    }
  } else {
    // Mostrar índices en la primera fila
    foreach ($datos as $indice) {
      $mensaje .= "<td>$indice</td>";
    }
  }

  $mensaje .= "</tr>";
}

$mensaje .= "</table>";

// Información adicional sobre el array
$mensaje .= "El array tiene:<br>";
$mensaje .= count($auxPri) . ((count($auxPri) != 1) ? " números primos, <br>" : " número primo, <br>");
$mensaje .= count($auxNoPri) . ((count($auxNoPri) != 1) ? " números no primos<br>" : " número no primo,<br>");
$mensaje .= $negativo . (($negativo != 1) ? " números negativos." : " número negativo.");

// Mostrar el resultado
echo $mensaje;
