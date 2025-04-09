<?php

// Función para generar un array de enteros aleatorios
function funcion_generaArrayBiInt($filas, $columnas, $minimo, $maximo)
{
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

function funcion_filaDeArrayBiInt($matriz, $filas, $columnas, $minimo, $maximo, $numeroFila)
{
    $indiceFila = (int)$numeroFila; // Convertir a entero

    // Verificar si la matriz es válida y el índice de fila está dentro del rango
    if (!is_array($matriz) || $indiceFila < 0 || $indiceFila >= count($matriz)) {
        return null; // índice inválido o no es una matriz válida
    }

    return $matriz[$indiceFila];
}
function funcion_columnaDeArrayBiInt($matriz, $filas, $columnas, $minimo, $maximo, $numeroColumna)
{
    $indiceColumna = (int)$numeroColumna;

    // Verificar si la matriz es válida
    if (!is_array($matriz) || count($matriz) === 0 || !is_array($matriz[0])) {
        return null;
    }

    // Verificar que el índice esté dentro de los límites de las columnas
    if ($indiceColumna < 0 || $indiceColumna >= count($matriz[0])) {
        return null;
    }

    $columna = [];

    foreach ($matriz as $fila) {
        if (isset($fila[$indiceColumna])) {
            $columna[] = $fila[$indiceColumna];
        } else {
            $columna[] = null; // En caso de que alguna fila no tenga esa columna
        }
    }

    return $columna;
}
function funcion_coordenadasEnArrayBiInt($matriz, $filas, $columnas, $minimo, $maximo, $numeroColumna)
{
    $coordenadas = array(); // Array para guardar las coordenadas encontradas

    // Recorrer la matriz
    foreach ($matriz as $i => $fila) {
        foreach ($fila as $j => $valor) {
            if ($valor === (int) $numeroColumna) {
                $coordenadas[] = array($i, $j); // Guardar la coordenada [fila, columna]
            }
        }
    }

    return $coordenadas;
}
function funcion_esPuntoDeSilla($matriz)
{
    $puntosDeSilla = [];

    for ($i = 0; $i < count($matriz); $i++) {
        $fila = $matriz[$i];
        $minFila = min($fila); // Encuentra el mínimo de la fila

        // Buscar todas las columnas donde aparece ese mínimo
        for ($j = 0; $j < count($fila); $j++) {
            if ($fila[$j] === $minFila) {
                // Verificar si es el máximo en su columna
                $esPunto = true;
                for ($k = 0; $k < count($matriz); $k++) {
                    if ($matriz[$k][$j] > $minFila) {
                        $esPunto = false;
                        break;
                    }
                }

                if ($esPunto) {
                    $puntosDeSilla[] = [$i, $j];
                }
            }
        }
    }

    return $puntosDeSilla;
}

function funcion_diagonal($matriz, $filas, $columnas, $minimo, $maximo, $numeroFila, $numeroColumna, $direccion)
{
    $diagonales = [];
    $fila = (int) $numeroFila; // Convertir a entero
    $columna = (int) $numeroColumna; // Convertir a entero
    $direccion = (int) $direccion; // Convertir a entero

    // Diagonal de NorOeste a SurEste (NOSE)
    if ($direccion === 1) {
        // Subir y hacia la izquierda (NorOeste)
        $i = $fila;
        $j = $columna;
        while ($i >= 0 && $j >= 0) {
            $diagonales[] = ['coordenada' => [$i, $j], 'valor' => $matriz[$i][$j]];
            $i--;
            $j--;
        }

        // Bajar y hacia la derecha (SurEste)
        $i = $fila + 1;
        $j = $columna + 1;
        while ($i < count($matriz) && $j < count($matriz[0])) {
            $diagonales[] = ['coordenada' => [$i, $j], 'valor' => $matriz[$i][$j]];
            $i++;
            $j++;
        }
    }

    // Diagonal de NorEste a SurOeste (NESO)
    else if ($direccion === 2) {
        // Subir y hacia la derecha (NorEste)
        $i = $fila;
        $j = $columna;
        while ($i >= 0 && $j < count($matriz[0])) {
            $diagonales[] = ['coordenada' => [$i, $j], 'valor' => $matriz[$i][$j]];
            $i--;
            $j++;
        }

        // Bajar y hacia la izquierda (SurOeste)
        $i = $fila + 1;
        $j = $columna - 1;
        while ($i < count($matriz) && $j >= 0) {
            $diagonales[] = ['coordenada' => [$i, $j], 'valor' => $matriz[$i][$j]];
            $i++;
            $j--;
        }
    }

    // Ordenar las coordenadas primero por fila y luego por columna
    usort($diagonales, function ($a, $b) {
        if ($a['coordenada'][0] !== $b['coordenada'][0]) {
            return $a['coordenada'][0] - $b['coordenada'][0]; // Primero por fila
        }
        return $a['coordenada'][1] - $b['coordenada'][1]; // Luego por columna
    });

    // Imprimir las diagonales en el formato requerido


    return $diagonales;
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
