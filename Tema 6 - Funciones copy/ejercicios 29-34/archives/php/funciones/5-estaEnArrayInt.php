<?php
// app/includes/archivo2.php

function estaEnArrayInt($array,$numero)
{
    // Verifica si $array es un array y si $numero está en el array
    if (is_array($array) && in_array($numero, $array)) {
        return true;
    }
    return false;
}
