<?php
function numerosPrimos($limite) {
    $limite = abs(intval($limite));
    if ($limite < 2) return []; // No hay primos menores a 2

    $numeros = array_fill(0, $limite + 1, true);
    $numeros[0] = $numeros[1] = false; // 0 y 1 no son primos

    for ($n = 2; $n <= sqrt($limite); $n++) {
        if ($numeros[$n]) {
            for ($i = $n * $n; $i <= $limite; $i += $n) {
                $numeros[$i] = false;
            }
        }
    }

    return array_keys(array_filter($numeros));
}



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar si se enviaron datos
    if (isset($_POST['datos']) && isset($_POST['funcion'])) {
        // Decodificar JSON recibido en un array asociativo
        $datos = json_decode($_POST['datos'], true);
        $funcion = $_POST['funcion'];

        // Verificar que la decodificación fue exitosa
        if (json_last_error() === JSON_ERROR_NONE) {
            // Verificar si la función existe en PHP
            if (function_exists($funcion)) {
                // Llamar a la función pasando todos los valores del objeto como argumentos
                $resultado = call_user_func_array($funcion, array_values($datos));


                // Devolver el resultado en formato JSON para asegurar compatibilidad
                echo json_encode(["resultado" => $resultado]);
            } else {
                echo json_encode(["error" => "Función no encontrada"]);
            }
        } else {
            echo json_encode(["error" => "JSON inválido"]);
        }
    } else {
        echo json_encode(["error" => "Faltan parámetros en la petición"]);
    }
}
