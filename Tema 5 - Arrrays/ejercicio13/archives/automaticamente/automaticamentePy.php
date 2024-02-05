<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $asociativo = json_encode($data->asociativo);
    $valoresUtilizados = json_encode($data->valoresUtilizados);
    $clavesUtilizadas = json_encode($data->clavesUtilizadas);
    $input1 = json_encode($data->input1);
    $input2 = json_encode($data->input2);
    $input3 = json_encode($data->input3);

    // Construir el comando de Python con los datos codificados como JSON
    $command = "python automaticamente.py " .
        escapeshellarg($asociativo) . " " .
        escapeshellarg($valoresUtilizados) . " " .
        escapeshellarg($clavesUtilizadas) . " " .
        escapeshellarg($input1) . " " .
        escapeshellarg($input2) . " " .
        escapeshellarg($input3);

    // Ejecutar el script de Python
    $output = shell_exec($command);

    // Imprimir la salida del script de Python
    echo $output;
}
