<?php
function calcularTamanoArray($limite)
{
    $count = 0;

    // Contar los números que no son múltiplos de 2 ni de 5
    for ($i = 2; $i <= $limite; $i++) {
        if ($i % 2 != 0 && $i % 5 != 0) {
            $count++;
        }
    }

    return $count;
}

// Ejemplo de uso
$limites = [2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 35, 45, 55, 87, 99, 101];
foreach ($limites as $limite) {
    echo "Para el límite $limite el tamaño del array es: " . calcularTamanoArray($limite) . "<br>";
}



