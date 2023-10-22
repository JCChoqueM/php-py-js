<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtiene los datos JSON del cuerpo de la solicitud POST
    $json_data = file_get_contents("php://input");

    // Decodifica los datos JSON en un array asociativo
    $data = json_decode($json_data, true);

    // Verifica que los datos requeridos estén presentes
    if (isset($data["numerosAuto"])) {
        // Recupera los valores de num1, num2 y numerosAuto

        $numerosAuto = $data["numerosAuto"];

        // Ejecuta el script Python pasando los datos como argumento de línea de comandos
        $command = "python automaticamente.py ". escapeshellarg(json_encode($numerosAuto));
        $output = shell_exec($command);

        echo $output;
    } else {
        echo "Faltan datos requeridos en la solicitud.";
    }
} else {
    echo "Solicitud no válida.";
}
