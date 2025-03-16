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
function funcion_voltea($num1)
{
    $digitosOriginal = funcion_digitos($num1);
    $voltea = 0;
    $dividendo = abs($num1);

    // Voltear el número
    while ($dividendo > 0) {
        $voltea = $voltea * 10 + ($dividendo % 10);
        $dividendo = intdiv($dividendo, 10);
    }

    // Convertir a string asegurando los ceros faltantes
    $volteadoStr = str_pad((string)$voltea, $digitosOriginal, "0", STR_PAD_LEFT);

    // Si el número original era negativo, mantener el signo
    if ($num1 < 0) {
        $volteadoStr = "-" . $volteadoStr;
        $voltea = -$voltea;
    }

    return [$volteadoStr, $voltea];
}

/* !section2 fin - 6.-voltea */

/* section 7.-digitoN*/
function funcion_digitoN($numero, $posicion)
{
    $digitos_numero = funcion_digitos($numero);
    $exponente = $digitos_numero - $posicion - 1;
    $primero = intval($numero, (funcion_potencia(10, $exponente)));
    $segundo = ($primero % 10);
    return $segundo;
}
/* !section fin - 7.-digitoN*/

/* section2 8.-posicionDeDigito */
function funcion_posicionDeDigito($numero, $digito)
{
    // Convertimos el número en una cadena absoluta (sin signo negativo)
    $strNum = strval(abs($numero));

    // Encontramos la primera ocurrencia del dígito
    $posIzq = strpos($strNum, strval($digito));

    // Encontramos la última ocurrencia del dígito
    $posDer = strrpos($strNum, strval($digito));

    // Ajustamos la posición de derecha a izquierda
    $posDerInvertido = ($posDer !== false) ? (strlen($strNum) - 1 - $posDer) : -1;

    return [
        ($posIzq !== false) ? $posIzq : -1,
        $posDerInvertido
    ];
}

/* !section2 fin - 8.-posicionDeDigito */

/* section 9.-quitaPorDetras */
function funcion_quitaPorDetras($numero, $digito)
{
    $numero = abs($numero);
    $nuevoNumero = floor($numero / funcion_potencia(10, $digito));
    return $nuevoNumero;
}
/* !section fin - 9.-quitaPorDetras */

/* section2 10.-quitaPorDelante */
function funcion_quitaPorDelante($numero, $digito)
{
    $esNegativo = $numero < 0;
    $numero = abs($numero);

    // Contar los dígitos del número
    $totalDigitos = funcion_digitos($numero);

    // Si se piden quitar más dígitos de los que tiene el número, devolver 0
    if ($digito >= $totalDigitos) {
        return 0;
    }

    // Cálculo de la nueva cantidad de dígitos
    $calculo = $totalDigitos - $digito;
    $nuevoNumero = $numero % pow(10, $calculo);

    // Restaurar el signo si el número original era negativo
    return $esNegativo ? -$nuevoNumero : $nuevoNumero;
}

/* !section2 fin - 10.-quitaPorDelante */

/* section 11.-pegaPorDetras */
function funcion_pegaPorDetras($numero, $numero2)
{
    $exponente = funcion_digitos($numero2);
    $pegado = abs($numero) * funcion_potencia(10, $exponente) + abs($numero2);
    return $numero < 0 ? -$pegado : $pegado;
}
/* !section fin - 11.-pegaPorDetras */

/* section2 12.-pegaPorDelante */
function funcion_pegaPorDelante($numero, $numero2)
{
    $aux = funcion_digitos($numero); // Cantidad de dígitos del número
    $pegado = abs($numero2) * pow(10, $aux) + abs($numero);

    // Si numero2 era negativo, mantener el signo
    return $numero2 < 0 ? -$pegado : $pegado;
}
/* !section2 fin - 12.-pegaPorDelante */

/* section 13.-trozoDeNumero */


function funcion_trozoDeNumero($numero, $inicial, $final)
{
    $numero = abs(intval($numero)); // Asegurarse de que el número sea positivo
    $inicial = intval($inicial);
    $final = intval($final);

    $digitoNumero = funcion_digitos($numero); // Obtener el número total de dígitos

    // Validaciones de rango
    if ($inicial < 0 || $final < 0 || $inicial > $digitoNumero - 1 || $final > $digitoNumero - 1 || $inicial > $final) {
        return "Error: Los valores inicial y final deben estar dentro del rango permitido.";
    }

    // Quitar dígitos por detrás
    $exponenteDetras = $digitoNumero - ($final + 1);
    $quitaDetras = floor($numero / pow(10, $exponenteDetras));

    // Número de dígitos del nuevo número
    $digitoNumeroNuevo = funcion_digitos($quitaDetras);

    // Quitar dígitos por delante
    $exponenteDelante = $digitoNumeroNuevo - $inicial;
    $quitaDelante = $quitaDetras % pow(10, $exponenteDelante);

    $digitoFinal = funcion_digitos($quitaDelante);

    // Verifica si es necesario agregar ceros a la izquierda
    if ($digitoFinal < $exponenteDelante) {
        $cerosExtra = str_repeat('0', $exponenteDelante - $digitoFinal);
        return "El trozo de número es:<br> Literal: {$cerosExtra}{$quitaDelante} <br>Numeral: {$quitaDelante}";
    } else {
        return "El trozo de número es: {$quitaDelante}";
    }
}


/* !section fin - 13.-trozoDeNumero */
/* section2 14.-juntaNumeros */
function funcion_juntaNumeros($num1,$num2)
{ 
    return $num1.$num2;
}
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
