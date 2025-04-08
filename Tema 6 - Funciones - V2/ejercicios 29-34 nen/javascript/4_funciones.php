<?php

// Función para generar un array de enteros aleatorios
function funcion_generaArrayBiInt($filas, $columnas, $minimo, $maximo) {
    $matriz = array();

    for ($i = 0; $i < $filas; $i++) {
        $fila = array();
        for ($j = 0; $j < $columnas; $j++) {
            $fila[] = rand($minimo, $maximo);
        }
        $matriz[] = $fila;
    }

    return $matriz;
}


// Función para encontrar el valor mínimo en un array
function funcion_minimoArrayInt($array)
{
    if (empty($array)) {
        return null; // El array está vacío
    }
    return min($array); // Usa min() para obtener el valor mínimo
}

// Función para encontrar el valor máximo en un array
function funcion_maximoArrayInt($array)
{
    if (empty($array)) {
        throw new Exception('El input no es un array válido o está vacío.');
    }

    return max($array); // Usa max() para obtener el valor máximo
}

// Función para calcular la media de un array
function funcion_mediaArrayInt($array)
{
    if (empty($array)) {
        return 0; // Retorna 0 si el array está vacío
    }

    $suma = array_sum($array); // Suma todos los elementos del array
    $numeroDeElementos = count($array); // Número de elementos en el array

    return round($suma / $numeroDeElementos, 2); // Calcula la media y la redondea a 2 decimales
}

// Función para verificar si un número está en el array
function funcion_estaEnArrayInt($array, $numero, $minimo, $maximo, $num4)
{
    return in_array($num4, $array); // Verifica si 'numero' está en el array
}

// Función para encontrar todas las posiciones de un número en el array
function funcion_posicionEnArrayInt($array, $numero, $minimo, $maximo, $num4)
{
    $posiciones = [];

    // Convertir num4 en entero
    $extra = (int)$num4;

    // Verifica si el primer parámetro es un array
    if (is_array($array)) {
        // Recorre el array y encuentra las posiciones donde el valor es igual a 'extra'
        foreach ($array as $indice => $valor) {
            if ($valor === $extra) {
                $posiciones[] = $indice; // Añadir la posición al array
            }
        }
    } else {
        echo 'El primer parámetro no es un array.';
    }

    // Retorna el array de posiciones
    return ($posiciones);
}

// Función para voltear un array
function funcion_volteaArrayInt($array)
{
    return array_reverse($array); // Devuelve el array invertido
}

// Función para rotar un array a la derecha


// Función para rotar un array a la derecha
function funcion_rotaDerechaArrayInt($array, $numero, $minimo, $maximo, $num4)
{
    // Si el array está vacío o no es un array válido, se retorna el array original con posición 0
    if (!is_array($array) || empty($array)) {
        return [$array, 0];
    }

    // Calcula el número de rotaciones necesarias
    $datos = (int)$num4 % count($array);

    // Si el número de rotaciones es 0, no se requiere rotación
    if ($datos === 0) {
        return [$array, 0];
    }

    // Extrae las partes del array y las combina en el orden deseado
    $part1 = array_slice($array, -$datos); // Últimos 'datos' elementos
    $part2 = array_slice($array, 0, count($array) - $datos); // Elementos restantes

    // Calcula la nueva posición del primer elemento original
    $nuevaPosicion = $datos;

    // Devuelve el array rotado y la nueva posición del primer elemento original
    return [array_merge($part1, $part2), $nuevaPosicion];
}

// Función para rotar un array a la izquierda
function funcion_rotaIzquierdaArrayInt($array, $numero, $minimo, $maximo, $num4)
{
    $count = count($array);

    // Si el array está vacío o solo tiene un elemento, no se necesita rotación
    if ($count <= 1) {
        return [$array, 0];
    }

    // Asegúrate de que 'datos' sea un número positivo y menor que el tamaño del array
    $datos = $num4 % count($array);

    // Si 'datos' es 0, no se requiere rotación
    if ($datos === 0) {
        return [$array, 0];
    }

    // Realizar la rotación a la izquierda
    $part1 = array_slice($array, 0, $datos); // Primeros 'datos' elementos
    $part2 = array_slice($array, $datos); // Elementos restantes

    // Calcula la nueva posición del primer elemento original
    $nuevaPosicion = ($count - $datos) % $count;

    // Devuelve el array rotado y la nueva posición del primer elemento original
    return [array_merge($part2, $part1), $nuevaPosicion];
}




// Manejar la solicitud POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verificar si se enviaron los parámetros necesarios
    if (isset($_POST['datos']) && isset($_POST['funcion'])) {
        // Decodificar JSON recibido
        $datos = json_decode($_POST['datos'], true);
        $funcion = $_POST['funcion'];

        // Verificar que la decodificación fue exitosa
        if (json_last_error() === JSON_ERROR_NONE) {
            // Verificar si la función existe en PHP
            if (function_exists($funcion)) {
                // Llamar a la función con los parámetros correspondientes
                $resultado = call_user_func_array($funcion, array_values($datos));

                // Devolver el resultado en formato JSON
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
