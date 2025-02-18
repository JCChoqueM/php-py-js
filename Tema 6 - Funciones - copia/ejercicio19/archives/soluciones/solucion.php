<?php
function generarMatrizYDatos()
{
  // Array para almacenar una secuencia lineal de números aleatorios únicos
  $lineal = [];
  $i = 0;

  // Generación de números aleatorios únicos
  do {
    // Generar un número aleatorio entre 100 y 999
    $n = rand(0,100);
    // Verificar si el número generado ya está en la secuencia lineal
      $lineal[] = $n;
      $i++;
    
  } while ($i < 12 * 12); // Repetir hasta tener 54 números únicos

  // Variables para almacenar el valor mínimo y sus coordenadas en la matriz
  $i = 0;
  $numero = [];

  // Creación de la matriz bidimensional
  for ($x = 0; $x < 12; $x++) {
    $numero[$x] = [];
    for ($y = 0; $y < 12; $y++) {
      // Llenar la matriz con los números aleatorios únicos
      $numero[$x][$y] = $lineal[$i];
      $i++;
      // Actualizar el valor mínimo y sus coordenadas si se encuentra un nuevo mínimo
    }
  }
  // Retornar un objeto con la matriz, el valor mínimo y sus coordenadas
  return $numero;
}
$bidimencional = generarMatrizYDatos();
function imprimirTabla($numero, $ejeX, $ejeY)
{
  $mensaje = "<table border='1'>";
  // Añadir fila de índices de columna arriba de la tabla
  $mensaje .= "<tr>";
  $mensaje .= "<td></td>"; // Celda vacía para ajustar el índice de fila
  for ($y = 0; $y < 12; $y++) {
    $mensaje .= "<td style='background-color: yellow;'>$y</td>";
  }
  $mensaje .= "</tr>";
  for ($x = 0; $x < 12; $x++) {
    $mensaje .= "<tr>";
    // Añadir índice de fila a la izquierda de la fila
    $mensaje .= "<td style='background-color: orange;'>" . "&nbsp;&nbsp" . $x . "</td>";
    for ($y = 0; $y < 12; $y++) {
      // Determinar el color de fondo basado en la posición de la celda
      $colorFondo = getColorFondo($x, $y, $ejeX, $ejeY);
      $mensaje .= "<td style='background-color: $colorFondo;'>" . $numero[$x][$y] . "</td>";
    }
    $mensaje .= "</tr>";
  }
  $mensaje .= "</table>";
  return $mensaje;
}
function rotarTabla($numero)
{
  function copiarArrayBidimensional($arrayOriginal)
  {
    $filas = count($arrayOriginal);
    $columnas = count($arrayOriginal[0]); // Se asume que todas las filas tienen la misma longitud

    // Inicializar el nuevo array bidimensional
    $nuevoArray = array();
    for ($i = 0; $i < $filas; $i++) {
      $nuevoArray[$i] = array_fill(0, $columnas, null);
    }

    return $nuevoArray;
  }

  $copia = copiarArrayBidimensional($numero);

  //SECTION - Inicio-Rotar fila superior a la Derecha
  for ($i = 0; $i < 6; $i++) {
    for ($j = 0; $j < 11 - $i; $j++) {
      $copia[$i][$j + 1] = $numero[$i][$j];
    }
  }
  //!SECTION - Fin-Rotar fila superior a la Derecha

  //SECTION - Inicio-Rotar Ultima columna hacia abajo
  for ($i = 0; $i < 6; $i++) {
    for ($j = $i; $j < 11 - $i; $j++) {
      $copia[$j + 1][11 - $i] = $numero[$j][11 - $i];
    }
  }
  //!SECTION - Fin-Rotar Ultima columna hacia abajo

  //SECTION - Inicio-Rotar fila inferior a la Izquierda
  for ($i = 0; $i < 6; $i++) {
    for ($j = $i; $j < 11 - $i; $j++) {
      $copia[11 - $i][$j] = $numero[11 - $i][$j + 1];
    }
  }
  //!SECTION - Fin-Rotar fila inferior a la Izquierda

  //SECTION - Inicio-Rotar primera columna hacia Arriba
  for ($i = 0; $i < 6; $i++) {
    for ($j = $i; $j < 11 - $i; $j++) {
      $copia[$j][$i] = $numero[$j + 1][$i];
    }
  }
  //!SECTION -Fin-Rotar primera columna hacia Arriba
  return $copia;
}
function getColorFondo($x, $y, $ejeX, $ejeY)
{
  switch (true) {
    case ($x == 0 || $x == 11 || $y == 0 || $y == 11):
      return $x == $ejeX + 0 && $y == $ejeY + 0 ? "#1EA50E" : "#49FF33";
    case ($x == 1 || $x == 10 || $y == 1 || $y == 10):
      return $x == $ejeX + 1 && $y == $ejeY + 1 ? "#5C39D2" : "#7F5FEE";
    case ($x == 2 || $x == 9 || $y == 2 || $y == 9):
      return $x == $ejeX + 2 && $y == $ejeY + 2 ? "#F16C09" : "#DC7F3A";
    case ($x == 3 || $x == 8 || $y == 3 || $y == 8):
      return $x == $ejeX + 3 && $y == $ejeY + 3 ? "#A41B0C" : "#AA3629";
    case ($x == 4 || $x == 7 || $y == 4 || $y == 7):
      return $x == $ejeX + 4 && $y == $ejeY + 4 ? "#CB315C" : "#C94D70";
    case ($x == 5 || $x == 6 || $y == 5 || $y == 6):
      return $x == $ejeX + 5 && $y == $ejeY + 5 ? "#FFC300" : "#DBE337";
    default:
      return "";
  }
}
echo (imprimirTabla($bidimencional, 0, 0) . "<br>");
$rotado = rotarTabla($bidimencional);
echo imprimirTabla($rotado, 0, 1);
