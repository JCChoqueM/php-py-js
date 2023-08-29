<?php
if (isset($_GET["numeros"])) {
    $numeros = json_decode($_GET["numeros"]);
    
    if (count($numeros) === 3) {
        $suma = array_sum($numeros);
        echo $suma;
    }
}
