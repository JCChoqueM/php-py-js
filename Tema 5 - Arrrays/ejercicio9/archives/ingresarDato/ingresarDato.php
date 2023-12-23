<?php
// Verificar si se proporciona el parámetro "numeros" a través de GET
if ((isset($_GET["numeros1"]))) {
    // Decodificar el JSON proporcionado y asegurarse de que haya exactamente 5 elementos en el array
    $numeros = json_decode($_GET["numeros1"]);
    $iniFin = json_decode($_GET["numeros2"]);
    if (count($numeros) === 5) {

        // Variables para el mensaje y estadísticas
        $mensaje = "";
        $colorCambio1 = 'background-color: #2EFE64; color:black';
        $colorCambio2 = 'background-color: #FE2E2E; color:black';
        $colorNegativo = 'background-color: pink; color:black';

        $aux;
        $arrayOriginal = array_slice($numeros, 0);

        if (!($iniFin[0] >= 0 && $iniFin[0] < (count($numeros) - 1))) {
            $mensaje = "Inicial debe estar comprendido entre 0 y " . count($numeros) - 2;
        } elseif (!($iniFin[1] > $iniFin[0] && $iniFin[1] <= (count($numeros) - 1))) {
            $mensaje = "Final debe ser mayor que " . $iniFin[0] . " y menor que " . count($numeros) - 1;
        } else {
            $contador;
            $aux = $numeros[count($numeros) - 1];
            for ($contador = (count($numeros) - 1); $contador > $iniFin[1]; $contador--) {
                $numeros[$contador] = $numeros[$contador - 1];
            }
            $numeros[$iniFin[1]] = $numeros[$iniFin[0]];
            for ($contador = ($iniFin[0]); $contador > 0; $contador--) {
                $numeros[$contador] = $numeros[$contador - 1];
            }
            $numeros[0] = $aux;
            // Construir la tabla HTML con los resultados
            $mensaje = "<table border='1' >";
            $filas = [
                ["Índice", array_keys($arrayOriginal)],
                ["Matriz", $arrayOriginal],
                ["Ordenado", $numeros]
            ];

            foreach ($filas as $fila) {
                $titulo = $fila[0];
                $datos = $fila[1];

                $mensaje .= "<tr>";
                $mensaje .= "<th>$titulo</th>";

                if ($titulo !== "Índice") {
                    // Construir filas de la tabla con colores según ciertas condiciones
                    foreach ($datos as $clave => $elemento) {
                        if ($clave == $iniFin[0]) {
                            $color = $colorCambio1;
                        } else {
                            $color = $colorCambio2;
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
        }
        echo $mensaje;
    } else {
        $mensaje = "El array esta vacio o no cumple las condiciones";
    }
}
