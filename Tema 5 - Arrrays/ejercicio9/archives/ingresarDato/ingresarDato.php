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
        $colorNegativo = 'background-color: #00000000; color:black';

        $aux;

        $arrayOriginal = array_slice($numeros, 0);
        $posicionesIntroducidas = "Inicial=" . $iniFin[0] . " Final=" . $iniFin[1];
        if (!($iniFin[0] >= 0 && $iniFin[0] < (count($numeros) - 1))) {
            $mensaje = "<br>$posicionesIntroducidas  <br><br>Inicial debe estar comprendido entre 0 y " . count($numeros) - 2;
        } elseif (!($iniFin[1] > $iniFin[0] && $iniFin[1] <= (count($numeros) - 1))) {
            $mensaje = "<br>$posicionesIntroducidas  <br><br><br>Final debe ser mayor que " . $iniFin[0] . " y menor que " . count($numeros) - 1;
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
            $mensaje = $posicionesIntroducidas;
            $mensaje .= "<table border='1' >";
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

                if ($titulo === "Índice") {
                    // Mostrar índices en la primera fila
                    foreach ($datos as $indice) {
                        $mensaje .= "<td>$indice</td>";
                    }
                } elseif ($titulo === "Matriz") {
                    // Construir filas de la tabla con colores según ciertas condiciones
                    foreach ($datos as $clave => $elemento) {
                        if ($clave == $iniFin[0]) {
                            $color = $colorCambio1;
                        } elseif ($clave == $iniFin[1]) {
                            $color = $colorCambio2;
                        } else {
                            $color = $colorNegativo;
                        }
                        $mensaje .= "<td style='$color'>$elemento</td>";
                    }
                } elseif ($titulo === "Ordenado") {
                    // Construir filas de la tabla con colores según ciertas condiciones
                    foreach ($datos as $clave => $elemento) {
                        if ($clave == ($iniFin[1] % count($datos))) {
                            // Si $final está en la última posición, usa el índice 0
                            $color = $colorCambio1;
                        } elseif ($clave == ($iniFin[1] + 1) % count($datos)) {
                            // Color para la posición siguiente a $final
                            $color = $colorCambio2;
                        } else {
                            // Color por defecto
                            $color = $colorNegativo;
                        }

                        $mensaje .= "<td style='$color'>$elemento</td>";
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
