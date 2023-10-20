<?php
if (isset($_GET["numeros"])) {
    $numeros = json_decode($_GET["numeros"]);
    
    if (count($numeros) === 5) {
        $mensaje = "";
        $max = $numeros[0];
        $min = $numeros[0];

        foreach ($numeros as $elemento) {
            if ($elemento > $max) {
                $max = $elemento;
            }
            if ($elemento < $min) {
                $min = $elemento;
            }
        }
        $mensaje .= " <table border='1'><tr><th>Indice</th><th>Numero</th></tr>";
        $contador = 0;
        foreach ($numeros as $elemento) {
            if ($max == $min) {
                $mensaje .= "<tr> <td>$contador</td> <td>$elemento es max y min </td> </tr>";
            } elseif ($elemento == $min) {
                $mensaje .= "<tr> <td>$contador</td> <td>$elemento minimo </td> </tr>";
            } elseif ($elemento == $max) {
                $mensaje .= "<tr> <td>$contador</td> <td>$elemento maximo </td> </tr>";
            } else {
                $mensaje .= "<tr> <td>$contador</td> <td>$elemento </td> </tr>";
            }
            $contador += 1;
        }
        $mensaje .= "</table>";
        echo $mensaje;
    }
}
