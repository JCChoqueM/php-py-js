<?php
// Definir la matriz original
$matriz = array(
    array('a', 'b', 'c', 'd', 'e'),
    array('p', ' ', ' ', ' ', 'f'),
    array('o', ' ', ' ', ' ', 'g'),
    array('n', ' ', ' ', ' ', 'h'),
    array('m', 'l', 'k', 'j', 'i')
);

// Función para rotar la matriz una posición en sentido de las agujas del reloj
function rotateClockwise(&$matriz)
{
    $n = count($matriz);
    $m = count($matriz[0]);
    $rotada = array();

    // Rotar los elementos de la matriz
    for ($i = 0; $i < $n; $i++) {
        for ($j = 0; $j < $m; $j++) {
            if ($j < $m - 1) {
                $rotada[$i][$j + 1] = $matriz[$i][$j];
            } elseif ($i < $n - 1) {
                $rotada[$i + 1][$j] = $matriz[$i][$j];
            } elseif ($j > 0) {
                $rotada[$i][$j - 1] = $matriz[$i][$j];
            } elseif ($i > 0) {
                $rotada[$i - 1][$j] = $matriz[$i][$j];
            }
        }
    }

    // Copiar la esquina superior izquierda en la esquina inferior derecha
    $rotada[$n - 1][$m - 1] = $matriz[0][0];

    // Copiar la matriz rotada de nuevo en la matriz original
    $matriz = $rotada;
}

// Función para imprimir la matriz en una tabla HTML
function imprimirTabla($matriz)
{
    echo "<table border='1'>";
    foreach ($matriz as $fila) {
        echo "<tr>";
        foreach ($fila as $valor) {
            echo "<td>$valor</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
}

// Imprimir la matriz original en una tabla HTML
echo "<h2>Matriz Original</h2>";
imprimirTabla($matriz);

// Rotar la matriz en sentido de las agujas del reloj
rotateClockwise($matriz);

// Imprimir la matriz rotada en una tabla HTML
echo "<h2>Matriz Rotada en Sentido del Reloj</h2>";
imprimirTabla($matriz);
?>
