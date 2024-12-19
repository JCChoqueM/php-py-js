<?php
function DecimalBinario($numeroDecimal)
{
    $binario = decbin($numeroDecimal);
    return $binario;
}

function DecimalHexadecimal($numeroDecimal)
{
    $hexadecimal = dechex($numeroDecimal);
    return strtoupper($hexadecimal); // Convertir a mayúsculas para una mejor presentación
}

function DecimalOctal($numeroDecimal)
{
    $octal = decoct($numeroDecimal);
    return $octal;
}
