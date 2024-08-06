<?php
function potencia($base, $exponente)
{
    $potencia = 1;
    for ($i = $exponente; $i > 0; $i--) {
        $potencia = ($potencia * $base);
    }
    return $potencia;
}
