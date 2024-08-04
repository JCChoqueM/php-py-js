<?php
function validarNumero($numero, $base)
{
    $esValido = false; // Variable para determinar si el número es válido

    switch ($base) {
        case "Binario":
            $esValido = preg_match('/^[01]+$/', $numero); // Solo 0s y 1s
            break;
        case "Octal":
            $esValido = preg_match('/^[0-7]+$/', $numero); // Solo dígitos del 0 al 7
            break;
        case "Decimal":
            $esValido = preg_match('/^[0-9]+$/', $numero); // Solo dígitos del 0 al 9
            break;
        case "Hexadecimal":
            $esValido = preg_match('/^[0-9A-Fa-f]+$/', $numero); // Dígitos del 0 al 9 y letras A-F (mayúsculas o minúsculas)
            break;
    }

    return $esValido; // Retorna true si el número es válido, false en caso contrario
}


