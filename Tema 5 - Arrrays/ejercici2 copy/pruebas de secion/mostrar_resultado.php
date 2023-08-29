<?php
session_start();

$suma = 0;

if (isset($_SESSION["numeros"]) && count($_SESSION["numeros"]) == 4) {
    foreach ($_SESSION["numeros"] as $numero) {
        $suma += $numero;
    }
    // Mostrar el resultado
    echo "La suma de los 4 números es: " . $suma;

    // Limpiar el array
    $_SESSION["numeros"] = array();
} else {
    echo "Aún no se han ingresado 4 números.";
}
