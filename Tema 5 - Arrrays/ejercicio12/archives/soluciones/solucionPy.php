<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));


    $fruta = $data->fruta;


    // Construir el comando de Python con las dos arrays como argumentos
    $command = "python solucion.py " .
        escapeshellarg(json_encode($fruta)) . " ";

    // Ejecutar el script de Python
    $output = shell_exec($command);

    // Imprimir la salida del script de Python
    echo $output;
}
