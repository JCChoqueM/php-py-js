<?php

function DecimalBinario($numeroDecimal) {
    return decbin(intval($numeroDecimal));
}

function DecimalHexadecimal($numeroDecimal) {
    return strtoupper(dechex(intval($numeroDecimal)));
}

function DecimalOctal($numeroDecimal) {
    return decoct(intval($numeroDecimal));
}

function BinarioDecimal($numeroBinario) {
    return bindec($numeroBinario);
}

function HexadecimalDecimal($numeroHexadecimal) {
    return hexdec($numeroHexadecimal);
}

function OctalDecimal($numeroOctal) {
    return octdec($numeroOctal);
}

function DecimalDecimal($numeroDecimal) {
    return $numeroDecimal;
}

function BinarioBinario($numeroBinario) {
    return $numeroBinario;
}

function HexadecimalHexadecimal($numeroHexadecimal) {
    return $numeroHexadecimal;
}

function OctalOctal($numeroOctal) {
    return $numeroOctal;
}

function BinarioHexadecimal($numeroBinario) {
    return strtoupper(dechex(bindec($numeroBinario)));
}

function BinarioOctal($numeroBinario) {
    return decoct(bindec($numeroBinario));
}

function HexadecimalBinario($numeroHexadecimal) {
    return decbin(hexdec($numeroHexadecimal));
}

function HexadecimalOctal($numeroHexadecimal) {
    return decoct(hexdec($numeroHexadecimal));
}

function OctalBinario($numeroOctal) {
    return decbin(octdec($numeroOctal));
}

function OctalHexadecimal($numeroOctal) {
    return strtoupper(dechex(octdec($numeroOctal)));
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
