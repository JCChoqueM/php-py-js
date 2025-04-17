<?php
function procesarEjercicio1($dato) {
    session_start(); // Asegúrate de iniciar la sesión

    $clave = 'datosGuardados';
    
    if (!isset($_SESSION[$clave])) {
        $_SESSION[$clave] = [];
    }

    $dato = floatval($dato); // Asegurarse que sea numérico
    $_SESSION[$clave][] = $dato;

    if ($dato < 0) {
        $positivos = array_filter($_SESSION[$clave], function($d) {
            return $d >= 0;
        });

        $suma = array_sum($positivos);
        $cantidad = count($positivos);
        $promedio = $cantidad > 0 ? $suma / $cantidad : 0;

        unset($_SESSION[$clave]); // Reinicia la sesión para nuevos datos

        return [
            'datos' => array_values($positivos), // Resetear índices
            'promedio' => $promedio
        ];
    }

    return [
        'datos' => $_SESSION[$clave]
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
