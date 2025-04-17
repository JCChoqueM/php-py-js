<?php
function procesarEjercicio1($dato)
{
    session_start();
    $clave = 'datosGuardados';
    $datos = isset($_SESSION[$clave]) ? $_SESSION[$clave] : [];

    // Agrega el nuevo dato
    $datos[] = (int)$dato;
    $_SESSION[$clave] = $datos; // Guarda los datos en la sesión

    // Si el dato ingresado es negativo, realiza el procesamiento
    if ($dato < 0) {
        // Filtra los positivos
        $positivos = array_filter($datos, function ($d) {
            return $d >= 0;
        });

        // Cuenta los positivos
        $contador = count($positivos);

        // Filtra los impares
        $impares = array_filter($positivos, function ($d) {
            return $d % 2 !== 0;
        });

        // Calcula la media de los impares
        $mediaImpares = count($impares) > 0 ? array_sum($impares) / count($impares) : 0;

        // Filtra los pares
        $pares = array_filter($positivos, function ($d) {
            return $d % 2 === 0;
        });

        // Obtiene el mayor número par
        $mayorPar = count($pares) > 0 ? max($pares) : 0;

        // Reinicia los datos
        unset($_SESSION[$clave]);

        // Retorna los resultados
        return [
            'datos' => array_values($positivos), // Resetear índices
            'contador' => $contador,
            'numerosImpares' => array_values($impares), // Resetear índices
            'mediaImpares' => $mediaImpares,
            'numerosPares' => array_values($pares), // Resetear índices
            'mayorPar' => $mayorPar
        ];
    }

    // Si el dato no es negativo, solo retorna los datos
    return ['datos' => $datos];
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
