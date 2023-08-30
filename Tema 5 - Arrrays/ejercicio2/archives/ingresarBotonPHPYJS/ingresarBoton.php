<?php
if (isset($_GET["numerosPHP"])) {
    $numeros = json_decode($_GET["numerosPHP"]);

    if (count($numeros) === 3) {
        $suma = array_sum($numeros);
        echo $suma;
    }
}
