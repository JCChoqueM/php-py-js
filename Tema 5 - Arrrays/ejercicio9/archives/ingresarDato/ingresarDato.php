<?php
// Verificar si se proporciona el parámetro "numeros" a través de GET
if (isset($_GET["numeros"])) {
    // Decodificar el JSON proporcionado y asegurarse de que haya exactamente 5 elementos en el array
    $numeros = json_decode($_GET["numeros"]);
    if (count($numeros) === 5) {

        // Variables para el mensaje y estadísticas
        $mensaje = "";
        $negativo = 0;
        $colorCambio1 = 'background-color: #2EFE64; color:black';
        $colorCambio2 = 'background-color: #FE2E2E; color:black';
        $colorNegativo = 'background-color: pink; color:black';

        $auxPri = [];
        $auxNoPri = [];
        $aux = [];
        $auxOrde = [];

        // Función que verifica si un número es primo
        function esPrimo($numero)
        {
            if ($numero < 2) {
                return false;
            } elseif ($numero == 2 || $numero == 3) {
                return true;
            } elseif ($numero % 2 == 0) {
                return false;
            } else {
                for ($i = 2; $i * $i <= $numero; $i++) {
                    if ($numero % $i == 0) {
                        return false;
                    }
                }
                return true;
            }
        }

        // Contar números negativos en el array
        foreach ($numeros as $elemento) {
            if ($elemento < 0) {
                $negativo += 1;
            }
        }

        // Separar números primos y no primos en arrays auxiliares
        foreach ($numeros as $elemento) {
            if (esPrimo($elemento)) {
                array_push($auxPri, $elemento);
            } else {
                array_push($auxNoPri, $elemento);
            }
        }

        // Combinar arrays de primos y no primos
        $aux = array_merge($auxPri, $auxNoPri);

        // Ordenar arrays de primos y no primos
        sort($auxPri);
        sort($auxNoPri);

        // Combinar arrays ordenados de primos y no primos
        $auxOrde = array_merge($auxPri, $auxNoPri);

        // Construir la tabla HTML con los resultados
        $mensaje = "<table border='1' >";
        $filas = [
            ["Índice", array_keys($numeros)],
            ["Matriz", $numeros],
            ["Aux", $aux],
            ["Ordenado", $auxOrde]
        ];

        foreach ($filas as $fila) {
            $titulo = $fila[0];
            $datos = $fila[1];

            $mensaje .= "<tr>";
            $mensaje .= "<th>$titulo</th>";

            if ($titulo !== "Índice") {
                // Construir filas de la tabla con colores según ciertas condiciones
                foreach ($datos as $elemento) {
                    if ($elemento < 0) {
                        $color = $colorNegativo;
                    } else {
                        $color = esPrimo($elemento) ? $colorCambio1 : $colorCambio2;
                    }
                    $mensaje .= "<td style='$color'>$elemento</td>";
                }
            } else {
                // Mostrar índices en la primera fila
                foreach ($datos as $indice) {
                    $mensaje .= "<td>$indice</td>";
                }
            }

            $mensaje .= "</tr>";
        }

        $mensaje .= "</table>";

        // Información adicional sobre el array
        $mensaje .= "El array tiene:<br>";
        $mensaje .= count($auxPri) . ((count($auxPri) != 1) ? " numeros primos, <br>" : " numero primo, <br>");
        $mensaje .= count($auxNoPri) . ((count($auxNoPri) != 1) ? " numeros no primos<br>" : " numero no primo,<br>");
        $mensaje .= $negativo . (($negativo != 1) ? " numeros negativos." : " numero negativo.");

        // Imprimir el mensaje
        echo $mensaje;
    }
}
