<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    if (
        isset($data->numeros1) && count($data->numeros1) === 7 &&
        isset($data->numeros2) && count($data->numeros2) === 2
    ) {
        $numeros1 = $data->numeros1;
        $numeros2 = $data->numeros2;

        // Construir el comando de Python con las dos arrays como argumentos
        $command = "python automaticamente.py " .
            escapeshellarg(json_encode($numeros1)) . " " .
            escapeshellarg(json_encode($numeros2));

        // Ejecutar el script de Python
        $output = shell_exec($command);

        // Imprimir la salida del script de Python
        echo $output;
    }
}
