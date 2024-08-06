<?php
function HexadecimalDecimal($numeroHexadecimal)
{
    // Verificar si el valor es una cadena hexadecimal válida
    if (ctype_xdigit($numeroHexadecimal)) {
        // Convertir hexadecimal a decimal
        $decimal = hexdec($numeroHexadecimal);
        return $decimal;
    } else {
        return "Error: El valor no es un hexadecimal válido.";
    }
}
