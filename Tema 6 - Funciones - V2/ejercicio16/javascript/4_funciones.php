<?php
function numerosCapicua($limite)
{
    $limite = abs(intval($limite));
    $mensaje = [];

    // Generar capicúas de 1 a 5 dígitos
    // 1 dígito
    for ($i = 1; $i <= 9; $i++) {
        if ($i <= $limite) {
            $mensaje[] = $i;
        }
    }

    // 2 dígitos
    for ($i = 1; $i <= 9; $i++) {
        $capicua = $i . $i;
        if ($capicua <= $limite) {
            $mensaje[] = $capicua;
        }
    }

    // 3 dígitos
    for ($i = 1; $i <= 9; $i++) {
        for ($j = 0; $j <= 9; $j++) {
            $capicua = $i . $j . $i;
            if ($capicua <= $limite) {
                $mensaje[] = $capicua;
            }
        }
    }

    // 4 dígitos
    for ($i = 1; $i <= 9; $i++) {
        for ($j = 0; $j <= 9; $j++) {
            $capicua = $i . $j . $j . $i;
            if ($capicua <= $limite) {
                $mensaje[] = $capicua;
            }
        }
    }

    // 5 dígitos
    for ($i = 1; $i <= 9; $i++) {
        for ($j = 0; $j <= 9; $j++) {
            for ($k = 0; $k <= 9; $k++) {
                $capicua = $i . $j . $k . $j . $i;
                if ($capicua <= $limite) {
                    $mensaje[] = $capicua;
                }
            }
        }
    }

    return $mensaje;
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
