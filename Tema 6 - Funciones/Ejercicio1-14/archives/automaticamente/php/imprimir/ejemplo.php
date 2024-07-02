<?php
function posicionDeDigito($numero, $digito)
{
    $numeroOriginal = $numero;
    $numeroVolteado = 0;
    while ($numero != 0) {
        $resto = $numero % 10;
        $numeroVolteado = $numeroVolteado * 10 + $resto;
        $numero = intdiv($numero, 10);
    }

    $posicion = 0;
    while ($numeroVolteado != 0) {
        $resto = $numeroVolteado % 10;
        if ($resto === $digito) {
            return $posicion;
        }
        $numeroVolteado = intdiv($numeroVolteado, 10);
        $posicion++;
    }

    return "No encontrado (-1)";
}

// Ejemplo de uso:
$numero = 1220002;
$digito = 0;
$posicion = posicionDeDigito($numero, $digito);
echo "Posición del dígito $digito en el número $numero es: $posicion";






