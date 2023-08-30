<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $numeros = json_decode(file_get_contents("php://input"));

    if (count($numeros) === 3) {
        $output = shell_exec("python ingresarBoton.py " . escapeshellarg(json_encode($numeros)));
        echo $output;
    }
}
