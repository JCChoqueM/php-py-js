<?php
function funcion_generaArrayInt($tamano, $minimo, $maximo) {
    $minimo = (int) $minimo; // Asegurar que son números enteros
    $maximo = (int) $maximo;
    $tamano = (int) $tamano;

    $valores = [];
    for ($i = 0; $i < $tamano; $i++) {
        $valores[] = rand($minimo, $maximo); // Genera un número aleatorio entre mínimo y máximo
    }

    return $valores;
}
function funcion_minimoArrayInt($array, $datos = []) {
    if (!is_array($array) || empty($array)) {
        error_log('⚠ El array está vacío o no es válido.');
        return null;
    }

    return min($array);
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
