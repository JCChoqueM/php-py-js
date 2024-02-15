<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $numero = json_encode($data->numero);
    $minimo = json_encode($data->minimo);
    $xMinimo = json_encode($data->xMinimo);
    $yMinimo = json_encode($data->yMinimo);

    // Construir el comando de Python con los datos codificados como JSON
    $command = "python automaticamente.py " .
        escapeshellarg($numero) . " " .
        escapeshellarg($minimo) . " " .
        escapeshellarg($xMinimo) . " " .
        escapeshellarg($yMinimo);

    // Ejecutar el script de Python
    $output = shell_exec($command);

    // Imprimir la salida del script de Python
    echo $output;

}
