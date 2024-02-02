<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $input1 = $data->input1;
    $input2 = $data->input2;
    $input3 = $data->input3;
    $valoresUtilizados = $data->valoresUtilizados;
    $clavesUtilizadas = $data->clavesUtilizadas;

    $argumentos = escapeshellarg(json_encode($input1)) . " " . escapeshellarg(json_encode($input2)) . " " . escapeshellarg(json_encode($input3)) . " " . escapeshellarg(json_encode($valoresUtilizados)) . " " . escapeshellarg(json_encode($clavesUtilizadas));
    // Construir el comando de Python con las dos arrays como argumentos
    $command = "python solucion.py " . $argumentos;

    // Ejecutar el script de Python
    $output = shell_exec($command);

    // Imprimir la salida del script de Python
    echo $output;

}
