<?php

// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  // Verificar si se recibieron datos y que sea un array


  $limite = intval($datos[0]);
  if ($limite > 0 && $limite <= 99999) {
    $mensaje = imprimirTabla(capicua($limite));
  } else {
    $mensaje = "Solo se permiten numeros entre 1 y 99999";
  }
  echo $mensaje;;
} else {
  // Si no se recibieron datos POST, retornar un mensaje de error
  echo "Error: No se recibieron datos POST";
}


function capicua($limite)
{
  $mensaje = [];

  // Generar capicúas de 1 a 5 dígitos
  // 1 dígito
  for ($i = 1; $i <= 9; $i++) {
    if ($i <= $limite) {
      $mensaje[] = $i;
    }
  }

  // 2 dígitos
  for ($i = 1; $i <= 9; $i++) {
    $capicua = $i . $i;
    if ($capicua <= $limite) {
      $mensaje[] = $capicua;
    }
  }

  // 3 dígitos
  for ($i = 1; $i <= 9; $i++) {
    for ($j = 0; $j <= 9; $j++) {
      $capicua = $i . $j . $i;
      if ($capicua <= $limite) {
        $mensaje[] = $capicua;
      }
    }
  }

  // 4 dígitos
  for ($i = 1; $i <= 9; $i++) {
    for ($j = 0; $j <= 9; $j++) {
      $capicua = $i . $j . $j . $i;
      if ($capicua <= $limite) {
        $mensaje[] = $capicua;
      }
    }
  }

  // 5 dígitos
  for ($i = 1; $i <= 9; $i++) {
    for ($j = 0; $j <= 9; $j++) {
      for ($k = 0; $k <= 9; $k++) {
        $capicua = $i . $j . $k . $j . $i;
        if ($capicua <= $limite) {
          $mensaje[] = $capicua;
        }
      }
    }
  }

  return $mensaje;
}


function imprimirTabla($array, $columnas = 6)
{
  echo "<style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
           th, td {
                border: 1px solid #333;
                padding: 5px;
                text-align: center;
                font-size: 18px;
            }
            th {
                background-color: #f2f2f2;
            }
            td {
                background-color: #e6e6e6;
            }
            tr:nth-child(even) {
                background-color: #f9f9f9;
            }
            tr:nth-child(odd) {
                background-color: #ffffff;
            }
          </style>";
  echo "<table>";  // Inicia la tabla
  $contador = 0;
  echo "<tr>";  // Inicia la primera fila

  foreach ($array as $valor) {
    echo "<td>$valor</td>";  // Imprime cada valor en una celda de tabla
    $contador++;

    if ($contador % $columnas == 0) {
      echo "</tr><tr>";  // Inicia una nueva fila cada $columnas valores
    }
  }

  echo "</tr>";  // Cierra la última fila
  echo "</table>";  // Cierra la tabla
}
