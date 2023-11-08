<?php
if (isset($_GET["numeros"])) {
    $numeros = json_decode($_GET["numeros"]);
    if (count($numeros) === 5) {
        $arrayValido = true;
        foreach ($numeros as $elemento) {
            if ($elemento < 0) {
                $arrayValido = false;
                break;
            }
        }
        if ($arrayValido) {
            $mensaje = "";
            $colorCambio1 = 'background-color: #2EFE64; color:black';
            $colorCambio2 = 'background-color: #FE2E2E; color:black';
            $auxPri = [];
            $auxNoPri = [];
            $aux = [];
            $auxOrde = [];
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

            foreach ($numeros as $elemento) {
                if (esPrimo($elemento)) {
                    array_push($auxPri, $elemento);
                } else {
                    array_push($auxNoPri, $elemento);
                }
            }
            $aux = array_merge($auxPri, $auxNoPri);
            sort($auxPri);
            sort($auxNoPri);
            $auxOrde = array_merge($auxPri, $auxNoPri);
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
                    foreach ($datos as $elemento) {
                        $color = esPrimo($elemento) ? $colorCambio1 : $colorCambio2;
                        $mensaje .= "<td style='$color'>$elemento</td>";
                    }
                } else {
                    foreach ($datos as $indice) {
                        $mensaje .= "<td>$indice</td>";
                    }
                }

                $mensaje .= "</tr>";
            }

            $mensaje .= "</table>";

            $mensaje .= "El array tiene:<br>";
            $mensaje .= count($auxPri) . ((count($auxPri) != 1) ? " numeros primos y <br>" : " numero primo y <br>");
            $mensaje .= count($auxNoPri) . ((count($auxNoPri) != 1) ? " numeros no primos" : " numero no primo");
            echo $mensaje;
        } else {
            echo "<br><br>El array tiene numeros  negativos";
        }
    }
}
