<?php
// Recibir el número
$num = $_POST['num'];

// Función para verificar si el número es capicúa
function esCapicua($num) {
    $numStr = (string) abs($num); // Convertir el número a string y eliminar el signo
    return $numStr === strrev($numStr); // Comparar el número con su reverso
}

// Devolver 'true' o 'false' como texto
echo esCapicua($num) ? 'true' : 'false';
?>
