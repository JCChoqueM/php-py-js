<?php
function inicializarNumeros($limite)
{
    // Inicializamos el array con un tamaño máximo suficiente.
    $maxSize = $limite; // Tamaño máximo esperado.
    $numeros = array_fill(0, $maxSize, null); // Inicializa con valores nulos.

    $index = 0;

    // Añadimos números primos menores o iguales al límite
    if ($limite >= 2) {
        $numeros[$index++] = 2;
    }
    if ($limite >= 3) {
        $numeros[$index++] = 3;
    }
    if ($limite >= 5) {
        $numeros[$index++] = 5;
    }

    for ($i = 7; $i <= $limite; $i += 2) {
        if ($i % 5 != 0) {
            $numeros[$index++] = $i;
        }
    }

    // Ajustamos el tamaño del array al número de elementos realmente añadidos
    return array_slice($numeros, 0, $index);
}

// Ejemplo de uso
$limite = 50;
$primos = inicializarNumeros($limite);
print_r(imprimirArrayHorizontal($primos));

function imprimirArrayHorizontal($array)
{
    // Abrir la tabla
    echo '<table border="1" style="border-collapse: collapse; margin: 20px 0;">';
    echo '<tr>';

    // Encabezado de la tabla
    echo '<th style="border: 1px solid black; padding: 8px;">Índice/Valor</th>';

    // Cabecera de columnas para índices
    foreach (array_keys($array) as $indice) {
        echo '<th style="border: 1px solid black; padding: 8px;">' . htmlspecialchars($indice) . '</th>';
    }
    echo '</tr>';

    // Fila de valores
    echo '<tr>';
    echo '<td style="border: 1px solid black; padding: 8px;">Valor</td>';
    foreach ($array as $valor) {
        echo '<td style="border: 1px solid black; padding: 8px;">' . htmlspecialchars($valor) . '</td>';
    }
    echo '</tr>';

    // Cerrar la tabla
    echo '</table>';
}