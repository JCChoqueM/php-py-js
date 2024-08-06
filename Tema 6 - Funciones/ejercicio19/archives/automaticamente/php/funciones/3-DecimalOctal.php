<?php
function DecimalOctal($numeroDecimal)
{
    // Verificar si el número es un entero positivo
    if (is_int($numeroDecimal) && $numeroDecimal >= 0) {
        // Convertir de decimal a octal
        $octal = decoct($numeroDecimal);
        return $octal;
    } else {
        return "Error: El número debe ser un entero positivo.";
    }
}
