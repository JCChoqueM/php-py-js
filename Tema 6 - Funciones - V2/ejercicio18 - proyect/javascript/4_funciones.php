<?php
function decimalABinario($divisor)
{
    $suma = 0;
    for ($i = 0; $divisor > 0; $divisor = intdiv($divisor, 2)) {
        if ($divisor % 2 == 1) {
            $suma += 10 ** $i;
        }
        $i++;
    }
    return $suma;
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
