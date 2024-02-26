<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener el cuerpo de la solicitud como JSON y convertirlo a un array asociativo
  $datosJson = json_decode(file_get_contents('php://input'), true);

  // Acceder a los objetos dentro del array asociativo
  $mensaje = "";
  $bidimencional = $datosJson['numero'];

  function imprimirTabla($numero, $ejeX, $ejeY)
  {
    $ejeX = $ejeX;
    $ejeY = $ejeY;
    $mensaje = "<table border='1'>";
    // Añadir fila de índices de columna arriba de la tabla
    $mensaje .= "<tr>";
    $mensaje .= "<td></td>"; // Celda vacía para ajustar el índice de fila
    for (
      $y = 0;
      $y < 12;
      $y++
    ) {
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


    //SECTION - Inicio-rotacion fila superior
    $ejeX = 0;
    for ($iteraciones = 11; $iteraciones >= 1; $iteraciones -= 2) {
      $ejeY = $ejeX;
      for ($i = 0; $i < $iteraciones; $i++) {
        $copia[$ejeX][$ejeY + 1] = $numero[$ejeX][$ejeY];
        $ejeY++;
      }
      $ejeX++;
    }
    //!SECTION - Fin-rotacion fila superior
    for ($i = 0; $i < 11; $i++) {
      $copia[$i + 1][11] = $numero[$i][11];
    }
    for ($i = 0; $i < 11; $i++) {
      $copia[11][$i] = $numero[11][$i + 1];
    }
    for ($i = 0; $i < 11; $i++) {
      $copia[$i][0] = $numero[$i + 1][0];
    }

    return $copia;
  }
  function getColorFondo($x, $y, $ejeX, $ejeY)
  {
    $ejeX = $ejeX;
    $ejeY = $ejeY;
    if (($x == 0 || $x == 11) || ($y == 11 || $y == 0)
    ) {
      return $x == $ejeX + 0 && $y == $ejeY + 0 ? "#1EA50E" : "#49FF33";
    } elseif (($x == 1 || $x == 10) || ($y == 10 || $y == 1)) {
      return $x == $ejeX + 1 && $y == $ejeY + 1 ? "#5C39D2" : "#7F5FEE";
    } elseif (($x == 2 || $x == 9) || ($y == 9 || $y == 2)) {
      return $x == $ejeX + 2 && $y == $ejeY + 2 ? "#F16C09" : "#DC7F3A";
    } elseif (($x == 3 || $x == 8) || ($y == 8 || $y == 3)) {
      return $x == $ejeX + 3 && $y == $ejeY + 3 ? "#A41B0C" : "#AA3629";
    } elseif (($x == 4 || $x == 7) || ($y == 7 || $y == 4)) {
      return $x == $ejeX + 4 && $y == $ejeY + 4 ? "#CB315C" : "#C94D70";
    } elseif (($x == 5 || $x == 6) || ($y == 6 || $y == 5)) {
      return $x == $ejeX + 5 && $y == $ejeY + 5 ? "#FFC300" : "#DBE337";
    } else {
      return "";
    }
  }


  echo (imprimirTabla($bidimencional, $ejex = 0, $ejey = 0) . "<br>");
  $rotado = rotarTabla($bidimencional);
  echo imprimirTabla(($rotado), $ejex = 0, $ejey = 1);
} else {
  // Manejar el caso en que la solicitud no sea de tipo POST
  echo 'Método no permitido';
}




        /*    if ($numero[$x][$y] == $minimo) {
              $mensaje .= "<td style='background-color: #33E9FF; color: black;'>" . $numero[$x][$y] . "</td>";
            } else if (abs((abs($x) - abs($xMinimo))) == abs(abs($y) - abs($yMinimo))) {
              $mensaje .= "<td style='background-color: green;'>" . $numero[$x][$y] . "</td>";
            } else {
              $mensaje .= "<td style='background-color: $colorFondo;'>" . $numero[$x][$y] . "</td>";
            } */