<?php
$data = json_decode(file_get_contents('php://input'));
if (isset($data->numeros) && isset($data->nombres)) {
 $numeros = $data->numeros;
    $nombres = $data->nombres;

    if (count($numeros) === 12) {
        $output = shell_exec("python ingresarDato.py " . escapeshellarg(json_encode($numeros)));
        echo $output;
    }
}
