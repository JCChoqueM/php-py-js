<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));


    $input1 = $data->input1;
    // Construir el comando de Python con las dos arrays como argumentos
    $command = "python solucion.py " .
    escapeshellarg(json_encode($input1)) . " ";

    // Ejecutar el script de Python
    $output = shell_exec($command);

    // Imprimir la salida del script de Python
    echo $output;

}
