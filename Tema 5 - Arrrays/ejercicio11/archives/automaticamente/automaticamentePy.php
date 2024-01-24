<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

   
        $asociativo = $data->asociativo;
        $fruta = $data->fruta;


        // Construir el comando de Python con las dos arrays como argumentos
        $command = "python automaticamente.py " .
            escapeshellarg(json_encode($asociativo, JSON_HEX_QUOT)) . " " .
            escapeshellarg(json_encode($fruta)) . " ";

        // Ejecutar el script de Python
        $output = shell_exec($command);

        // Imprimir la salida del script de Python
        echo $output;
    
}

