<?php
function procesarEjercicio1($dato)
{
    session_start();
    $clave = 'datosGuardados';

    if (!isset($_SESSION[$clave])) {
        $_SESSION[$clave] = [];
    }

    $dato = floatval($dato);
    $_SESSION[$clave][] = $dato;

    $datos = $_SESSION[$clave];
    $sumaTotal = array_sum($datos);

    if ($sumaTotal > 1000) {
        $contador = count($datos);
        $media = $contador > 0 ? $sumaTotal / $contador : 0;

        // Limpiar la sesión
        unset($_SESSION[$clave]);

        return [
            'datos' => array_values($datos), // Reindexar
            'contador' => $contador,
            'sumaTotal' => $sumaTotal,
            'media' => $media
        ];
    }

    return [
        'datos' => array_values($datos),
        'sumaTotal' => $sumaTotal
    ];
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
