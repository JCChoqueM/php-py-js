<?php
/* section 1.-esCapicua */
function funcion_esCapicua($num)
{
    // Convertimos el número a string, lo invertimos y comparamos con el original
    $num = abs($num);
    return strval($num) === strrev(strval($num));
}
/* !section fin - 1.-esCapicua */

/* section2 2.-esPrimo */
function funcion_esPrimo($num)
{
    // Un número es primo si solo es divisible por 1 y por sí mismo
    if ($num < 2) {
        return false;
    }
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i === 0) {
            return false;
        }
    }
    return true;
}
/* !section2 fin - 2.-esPrimo */

/* section 3.-siguientePrimo */
function funcion_siguientePrimo($num)
{
    $num = intval($num);
    if ($num < 2) return 2;

    $candidato = $num + 1;
    while (!funcion_esPrimo($candidato)) {
        $candidato++;
    }
    return $candidato;
}
/* !section fin - 3.-siguientePrimo */

/* section2 4.-potencia */
function funcion_potencia($base, $exponente)
{
    return pow($base, $exponente); // pow() es la función nativa de PHP para calcular potencias
}
/* !section2 fin - 4.-potencia */

/* section 5.-digitos */
function funcion_digitos($num)
{
    return strlen((string)abs($num));
}
/* !section fin - 5.-digitos */

/* section2 6.-voltea */

/* !section2 fin - 6.-voltea */

/* section 7.-digitoN*/

/* !section fin - 7.-digitoN*/

/* section2 8.-posicionDeDigito */

/* !section2 fin - 8.-posicionDeDigito */

/* section 9.-quitaPorDetras */

/* !section fin - 9.-quitaPorDetras */

/* section2 10.-quitaPorDelante */

/* !section2 fin - 10.-quitaPorDelante */

/* section 11.-pegaPorDetras */

/* !section fin - 11.-pegaPorDetras */

/* section2 12.-pegaPorDelante */

/* !section2 fin - 12.-pegaPorDelante */

/* section 13.-trozoDeNumero */

/* !section fin - 13.-trozoDeNumero */
/* section2 14.-juntaNumeros */

/* !section2 fin - 14.-juntaNumeros */






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
