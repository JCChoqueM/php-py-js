<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener los datos de la solicitud POST
    $data = json_decode(file_get_contents("php://input"));


    if (isset($data->numero)) {
        $numero = $data->numero;

        // Construir el comando de Python con los datos codificados como argumento
        $command = escapeshellcmd("python automaticamente.py " . escapeshellarg(json_encode($numero)));

        // Ejecutar el script de Python y capturar la salida
        $output = shell_exec($command);

        // Imprimir la salida del script de Python
        echo $output;
    } else {
        echo "No se proporcionó el número.";
    }
}
