<?php

$limite = 1000;

// Primer versión (corregida)
$numeros = array_fill(0, $limite + 1, true); // Inicializamos el array con valores true
$contador_primer_version = 0; // Inicializamos un contador para la primera versión

for ($n = 2; $n <= $limite; $n++) {
    // Si es primo recorrer los múltiplos y marcarlos como no primo
    if ($numeros[$n]) {
        for ($i = $n * $n; $i <= $limite; $i += $n) {
            if ($numeros[$i]) { // Verificar si el número no ha sido marcado como no primo
                $numeros[$i] = false;
                $contador_primer_version++; // Incrementar el contador
            }
        }
    }
}

echo "Cantidad de cambios a false en la primera versión: $contador_primer_version<br>";

// Segunda versión
$numeros = array_fill(0, $limite + 1, true); // Reinicializamos el array con valores true
$contador_segunda_version = 0; // Inicializamos un contador para la segunda versión

for ($n = 2; $n < sqrt($limite); $n++) {
    // Si es primo recorrer los múltiplos y marcarlos como no primo
    if (isset($numeros[$n]) && $numeros[$n]) {
        for ($i = $n * $n; $i < $limite; $i += $n) {
            $numeros[$i] = false;
            unset($numeros[$i]);
            $contador_segunda_version++; // Incrementar el contador
        }
    }
}

echo "Cantidad de cambios a false en la segunda versión: $contador_segunda_version";
