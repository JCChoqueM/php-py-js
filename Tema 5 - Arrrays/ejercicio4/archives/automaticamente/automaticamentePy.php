<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $numerosAuto = json_decode(file_get_contents("php://input"));

    if (count($numerosAuto) === 11) {
        $output = shell_exec("python automaticamente.py " . escapeshellarg(json_encode($numerosAuto)));
        echo $output;
    }
}
