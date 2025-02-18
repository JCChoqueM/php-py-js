<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function siguientePrimo($numero)
{
    for ($numero += 1; !esPrimo($numero); $numero++);
    return $numero;
}
