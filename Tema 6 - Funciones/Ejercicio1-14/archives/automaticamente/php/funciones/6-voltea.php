<?php
function voltea($num1)
{
    $voltea = 0;
    $dividendo = $num1;
    while ($dividendo > 0) {
        $voltea = $voltea * 10 + ($dividendo % 10);
        $dividendo = intdiv($dividendo, 10);
    }
    return $voltea;
}
