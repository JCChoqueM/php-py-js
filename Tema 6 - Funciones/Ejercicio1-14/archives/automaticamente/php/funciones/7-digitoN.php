<?php
include __DIR__ . '/../funciones/funciones.php';

function digitoN($num1)
{
    $digitosOriginal = digitos($num1);
    $voltea = 0;
    $dividendo = abs($num1);  // Consideramos el valor absoluto para voltear correctamente
    $array = [];

    // Voltear el número
    while ($dividendo > 0) {
        $voltea = $voltea * 10 + ($dividendo % 10);
        $dividendo = intdiv($dividendo, 10);
    }

    $digitosVoltea = digitos($voltea);

    // Si el número original y el número volteado tienen la misma cantidad de dígitos
    if ($digitosOriginal == $digitosVoltea) {
        $array[0] = ($num1 < 0) ? -$voltea : $voltea; // Asegurarse de mantener el signo negativo
        $array[1] = ($num1 < 0) ? -$voltea : $voltea;
    } else {
        $ceros = $digitosOriginal - $digitosVoltea;
        $volteadoStr = strval($voltea);

        // Añadir ceros al principio del número volteado
        for ($i = 0; $i < $ceros; $i++) {
            $volteadoStr = "0" . $volteadoStr;
        }

        $array[0] = ($num1 < 0) ? "-" . $volteadoStr : $volteadoStr;
        $array[1] = ($num1 < 0) ? -$voltea : $voltea;
    }
    return $array;
}
