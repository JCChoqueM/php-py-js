<?php

// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);
  // Verificar si se recibieron datos y que sea un array


  $limite = $datos[0];
  if($limite>0&&$limite<=1000){
    $mensaje= imprimirTabla(cribaEratostenes($limite));
  }else{
$mensaje="Solo se permiten numeros entre 1 y 1000";
  }
  echo $mensaje;;
} else {
  // Si no se recibieron datos POST, retornar un mensaje de error
  echo "Error: No se recibieron datos POST";
}


function cribaEratostenes($limite)
{
  $numeros = array_fill(2, $limite - 1, true);

  for ($n = 2; $n <= sqrt($limite); $n++) {
    if ($numeros[$n]) {
      for ($i = $n * $n; $i <= $limite; $i += $n) {
        $numeros[$i] = false;
      }
    }
  }

  return array_keys(array_filter($numeros));
}
function imprimirTabla($array, $columnas = 10)
{
  echo "<style>
            table {
                width: 75%;
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
