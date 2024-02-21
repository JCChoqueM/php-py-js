<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $numero = json_encode($data->numero);


    // Construir el comando de Python con los datos codificados como JSON
    $command = "python automaticamente.py " .
        escapeshellarg($numero);

    // Ejecutar el script de Python
    $output = shell_exec($command);

    // Imprimir la salida del script de Python
    echo $output;
}
