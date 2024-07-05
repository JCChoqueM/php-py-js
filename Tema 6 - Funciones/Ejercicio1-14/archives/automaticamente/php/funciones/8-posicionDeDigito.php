<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function posicionDeDigitoIzquierdaDerecha($numero, $digito)
{
    // Voltear el número
    $volteado = voltea2($numero);

    // Encontrar la posición del dígito en el número volteado
    $posicionEnVolteado = posicionDeDigitoDerechaIzquierda($volteado, $digito);

    // Si el número tiene la misma cantidad de dígitos después de voltear
    if (digitos($numero) == digitos($volteado)) {
        return $posicionEnVolteado;
    }

    // Manejo especial para ceros al final del número original
    if ($digito == 0) {
        if ($posicionEnVolteado == "No encontrado (-1)") {
            return digitos($volteado);
        }
    }

    return $posicionEnVolteado;
}

function posicionDeDigitoDerechaIzquierda($numero, $digito)
{
    $posicion = 0;
    $divisor = abs($numero);
    $encontrado = false;

    // Caso especial para cuando el número es 0 y el dígito buscado es 0
    if ($divisor == 0 && $digito == 0) {
        return $posicion;
    }

    // Buscar la posición del dígito
    while ($divisor > 0) {
        if ($divisor % 10 == $digito) {
            $encontrado = true;
            break;
        }
        $posicion += 1;
        $divisor = intdiv($divisor, 10);
    }

    return $encontrado ? $posicion : "No encontrado (-1)";
}
