<?php
// Arrays originales
$array1 = ['uno', 'dos', 'tres', 'cuatro'];
$array2 = ['cinco', 'seis', 'siete', 'ocho'];

// Array resultante
$arrayConcatenado = [];

// Array para seguir el rastro de las cadenas únicas
$cadenasUnicas = [];

// Obtener tres cadenas únicas
for ($i = 0; $i < 3; $i++) {
    do {
        // Números aleatorios como índices
        $indice1 = rand(0, count($array1) - 1);
        $indice2 = rand(0, count($array2) - 1);

        // Concatenar cadenas
        $cadenaConcatenada = $array1[$indice1] . $array2[$indice2];
    } while (isset($cadenasUnicas[$cadenaConcatenada]));

    // Agregar la cadena al array resultante
    $arrayConcatenado[] = $cadenaConcatenada;

    // Registrar la cadena como única
    $cadenasUnicas[$cadenaConcatenada] = true;
}

// Mostrar el resultado
print_r($arrayConcatenado);

