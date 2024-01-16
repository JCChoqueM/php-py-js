<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (
        isset($data->cartasSacadas) && is_array($data->cartasSacadas) &&
        isset($data->puntosSacados) && is_array($data->puntosSacados) &&
        isset($data->sumaTotal)
    ) {
        $cartasSacadas = $data->cartasSacadas;
        $puntosSacados = $data->puntosSacados;
        $sumaTotal = $data->sumaTotal;

        // Construir el comando de Python con las dos arrays como argumentos
        $command = "python automaticamente.py " .
            escapeshellarg(json_encode($cartasSacadas, JSON_HEX_QUOT)) . " " .
            escapeshellarg(json_encode($puntosSacados)) . " " .
            escapeshellarg($sumaTotal);

        // Ejecutar el script de Python
        $output = shell_exec($command);

        // Imprimir la salida del script de Python
        echo $output;
    }
}

