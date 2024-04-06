<?php
// Criba de Eratóstenes
// Obtener la lista de números a evaluar
$limite = 100;
for ($i = 1; $i <= $limite; $i++) {
    $numeros[$i] = true;
}

// Hacer 1 el primer número primo
$numeros[1] = false;

// Recorrer los números y para cada uno
for ($n = 2; $n <= $limite; $n++) {
    // Si es primo recorrer los múltiplos y marcarlos como no primo
    if ($numeros[$n]) {
        for ($i = $n * $n; $i <= $limite; $i += $n) {
            $numeros[$i] = false;
        }
    }
}

// Mostrar los números en forma de tabla
echo "<table border='1'>";
$count = 0;
echo "<tr>";
foreach ($numeros as $numero => $esPrimo) {
    if ($esPrimo) {
        echo "<td style='color: red;'>$numero</td>";
    } else {
        echo "<td>$numero</td>";
    }
    $count++;
    if ($count % 10 == 0) {
        echo "</tr><tr>"; // Nueva fila cada 10 números
    }
}
echo "</tr>";
echo "</table>";
