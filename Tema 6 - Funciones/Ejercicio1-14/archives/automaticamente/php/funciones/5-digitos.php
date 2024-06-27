<?php
function digitos($num1)
{
    $digitos = 0;
    $dividendo = $num1;
    do {
        $dividendo = intdiv($dividendo, 10);
        $digitos = $digitos + 1;
    } while ($dividendo > 0);
    return $digitos;
}
