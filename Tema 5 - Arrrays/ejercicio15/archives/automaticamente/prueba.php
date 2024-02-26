<?php
function crearNuevoArrayBidimensionalDelMismoTamaño($arrayOriginal)
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
// Ejemplo de un array bidimensional original
$arrayOriginal = array(
    array(9, 7, 5),
    array(3, 1, 0)
);

// Crear un nuevo array bidimensional del mismo tamaño que el array original
$nuevoArray = crearNuevoArrayBidimensionalDelMismoTamaño($arrayOriginal);

// Imprimir el nuevo array
print_r($arrayOriginal);
echo "<br>";
print_r($nuevoArray);
