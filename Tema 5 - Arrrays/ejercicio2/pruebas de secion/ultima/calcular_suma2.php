<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $numeros = $data["numeros"];
    
    if (count($numeros) === 3) {
        $suma = array_sum($numeros);
        echo $suma;
    } else {
        echo "Por favor, ingrese 3 números.";
    }
}
