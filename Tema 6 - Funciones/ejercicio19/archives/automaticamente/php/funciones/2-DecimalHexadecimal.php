<?php
// app/includes/archivo2.php

function DecimalHexadecimal($numeroDecimal)
{
    // Verificar si el número es un entero positivo
    if (is_int($numeroDecimal) && $numeroDecimal >= 0
    ) {
        // Convertir de decimal a hexadecimal
        $hexadecimal = dechex($numeroDecimal);
        return strtoupper($hexadecimal); // Convertir a mayúsculas para una mejor presentación
    } else {
        return "Error: El número debe ser un entero positivo.";
    }
}
