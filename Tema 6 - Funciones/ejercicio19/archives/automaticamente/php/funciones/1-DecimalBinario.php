<?php
function DecimalBinario($divisor)
{
    $suma = 0;

    for ($i = 0; $divisor > 0; $divisor = intdiv($divisor, 2)) {
        if ($divisor % 2 == 1) {
            $suma += 10 ** $i;
        }
        $i++;
    }
    return $suma;
}
