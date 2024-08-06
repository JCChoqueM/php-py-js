<?php
function OctalDecimal($numeroOctal)
{
    // Verificar si el valor es una cadena octal válida
    if (ctype_digit($numeroOctal) && preg_match('/^[0-7]+$/', $numeroOctal)) {
        // Convertir octal a decimal
        $decimal = octdec($numeroOctal);
        return $decimal;
    } else {
        return "Error: El valor no es un octal válido.";
    }
}
