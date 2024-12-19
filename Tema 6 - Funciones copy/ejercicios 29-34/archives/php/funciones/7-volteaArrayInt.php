<?php
// app/includes/archivo2.php

function volteaArrayInt($input1)

{
    $resultado = [];
    $count = count($input1);

    for ($i = $count - 1; $i >= 0; $i--) {
        $resultado[] = $input1[$i];
    }

    return $resultado;
}
