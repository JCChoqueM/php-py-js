<?php

// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {


  $datos = json_decode(file_get_contents("php://input"), true);

  $estado = !is_numeric($datos[0]) ? "0" : "1";
  $mensaje = [];
  switch ($estado) {
    case "0":
      $mensaje[] = "El campo está vacío o no es un número. Por favor, ingrese número(s).";
      break;
    case "1":
      $numero = intval($datos[0]);
      if ($numero >= 0) {
      } else {
        $numero = abs($numero);
      }
      if (verificarBinario($numero)) {
        $mensaje[] = "El numero binario $numero es igual a :<br>" . transformar($numero) . " en base Decimal.";
      } else {
        $mensaje[] = "El numero $numero no es Binario";
      }
      break;
    default:
      $mensaje[] = "Error desconocido. Por favor, revise las entradas.";
  }
  echo (imprimirTabla($mensaje));
} else {
  // Si no se recibieron datos POST, retornar un mensaje de error
  echo "Error: No se recibieron datos POST";
}


function transformar($divisor)
{
  $suma = 0;
  for ($i = 0; $divisor > 0; $i++) {
    $suma += ($divisor % 10) * 2 ** $i;
    $divisor = intdiv($divisor, 10);
  }

  return $suma;
}

function verificarBinario($divisor)
{
  $var_return = True;
  while ($divisor > 0 && $var_return == True) {
    if ($divisor % 10 == 0 || $divisor % 10 == 1) {
      $divisor = intdiv($divisor, 10);
    } else {
      $var_return = False;
    }
  }

  return $var_return;
}

function imprimirTabla($array, $columnas = 1)
{
  echo "<style>
            table {
                width: 100%;
                border-collapse: collapse;
            }
           th, td {
                border: 1px solid #333;
                padding: 20px;
                text-align: center;
                font-size: 18px;
                width: 350px; 
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
