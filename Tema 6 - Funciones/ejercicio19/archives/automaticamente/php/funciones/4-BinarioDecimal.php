<?php
function BinarioDecimal($numeroBinario)
{
    // Verificar si el valor es una cadena binaria válida
    if (ctype_digit($numeroBinario) && preg_match('/^[01]+$/', $numeroBinario)) {
        // Convertir binario a decimal
        $decimal = bindec($numeroBinario);
        return $decimal;
    } else {
        return "Error: El valor no es un binario válido.";
    }
}
