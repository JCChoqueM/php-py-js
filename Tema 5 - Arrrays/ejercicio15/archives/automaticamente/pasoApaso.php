    <?php
    //SECTION - copia de un array-bidimencional
    function copiarArrayBidimensional($arrayOriginal)
    {
        $filas = count($arrayOriginal);
        $columnas = count($arrayOriginal[0]); // Se asume que todas las filas tienen la misma longitud

        // Inicializar el nuevo array bidimensional
        $nuevoArray = array();
        for ($i = 0; $i < $filas; $i++) {
            $nuevoArray[$i] = array_fill(0, $columnas, null);
        }

        return $nuevoArray;
    }

    $copia = copiarArrayBidimensional($numero);
    //!SECTION fin copia de un array-bidimencional

    //SECTION - Inicio-Rotar fila superior a la Derecha
    for ($i = 0; $i < 6; $i++) {
        for ($j = 0; $j < 11 - $i; $j++) {
            $copia[$i][$j + 1] = $numero[$i][$j];
        }
    }

    //!SECTION - Fin-Rotar fila superior a la Derecha


    //SECTION - Inicio-Rotar Ultima columna hacia abajo
    for ($i = 0; $i < 6; $i++) {
        for ($j = $i; $j < 11 - $i; $j++) {
            $copia[$j + 1][11 - $i] = $numero[$j][11 - $i];
        }
    }

    //!SECTION - Fin-Rotar Ultima columna hacia abajo

    //SECTION - Inicio-Rotar fila inferior a la Izquierda
    for ($i = 0; $i < 6; $i++) {
        for ($j = $i; $j < 11 - $i; $j++) {
            $copia[11 - $i][$j] = $numero[11 - $i][$j + 1];
        }
    }

    //!SECTION - Fin-Rotar fila inferior a la Izquierda


    //SECTION - Inicio-Rotar primera columna hacia Arriba
    for ($i = 0; $i < 6; $i++) {
        for ($j = $i; $j < 11 - $i; $j++) {
            $copia[$j][$i] = $numero[$j + 1][$i];
        }
    }

    //!SECTION -Fin-Rotar primera columna hacia Arriba






    //SECTION - Inicio-Rotar fila superior a la Derecha
    for ($i = 0; $i < 11; $i++) {
        $copia[0][$i + 1] = $numero[0][$i];
    }
    for ($i = 1; $i < 10; $i++) {
        $copia[1][$i + 1] = $numero[1][$i];
    }
    for ($i = 2; $i < 9; $i++) {
        $copia[2][$i + 1] = $numero[2][$i];
    }
    for ($i = 3; $i < 8; $i++) {
        $copia[3][$i + 1] = $numero[3][$i];
    }
    for ($i = 4; $i < 7; $i++) {
        $copia[4][$i + 1] = $numero[4][$i];
    }
    for ($i = 5; $i < 6; $i++) {
        $copia[5][$i + 1] = $numero[5][$i];
    }
    //!SECTION - Fin-Rotar fila superior a la Derecha


    //SECTION - Inicio-Rotar Ultima columna hacia abajo
    for ($i = 0; $i < 11; $i++) {
        $copia[$i + 1][11] = $numero[$i][11];
    }
    for ($i = 1; $i < 10; $i++) {
        $copia[$i + 1][10] = $numero[$i][10];
    }
    for ($i = 2; $i < 9; $i++) {
        $copia[$i + 1][9] = $numero[$i][9];
    }
    for ($i = 3; $i < 8; $i++) {
        $copia[$i + 1][8] = $numero[$i][8];
    }
    for ($i = 4; $i < 7; $i++) {
        $copia[$i + 1][7] = $numero[$i][7];
    }
    for ($i = 5; $i < 6; $i++) {
        $copia[$i + 1][6] = $numero[$i][6];
    }
    //!SECTION - Fin-Rotar Ultima columna hacia abajo

    //SECTION - Inicio-Rotar fila inferior a la Izquierda
    for ($i = 0; $i < 11; $i++) {
        $copia[11][$i] = $numero[11][$i + 1];
    }
    for ($i = 1; $i < 10; $i++) {
        $copia[10][$i] = $numero[10][$i + 1];
    }
    for ($i = 2; $i < 9; $i++) {
        $copia[9][$i] = $numero[9][$i + 1];
    }
    for ($i = 3; $i < 8; $i++) {
        $copia[8][$i] = $numero[8][$i + 1];
    }
    for ($i = 4; $i < 7; $i++) {
        $copia[7][$i] = $numero[7][$i + 1];
    }
    for ($i = 5; $i < 6; $i++) {
        $copia[6][$i] = $numero[6][$i + 1];
    }
    //!SECTION - Fin-Rotar fila inferior a la Izquierda


    //SECTION - Inicio-Rotar primera columna hacia Arriba
    for ($i = 0; $i < 11; $i++) {
        $copia[$i][0] = $numero[$i + 1][0];
    }
    for ($i = 1; $i < 10; $i++) {
        $copia[$i][1] = $numero[$i + 1][1];
    }
    for ($i = 2; $i < 9; $i++) {
        $copia[$i][2] = $numero[$i + 1][2];
    }
    for ($i = 3; $i < 8; $i++) {
        $copia[$i][3] = $numero[$i + 1][3];
    }
    for ($i = 4; $i < 7; $i++) {
        $copia[$i][4] = $numero[$i + 1][4];
    }
    for ($i = 5; $i < 6; $i++) {
        $copia[$i][5] = $numero[$i + 1][5];
    }
//!SECTION -Fin-Rotar primera columna hacia Arriba