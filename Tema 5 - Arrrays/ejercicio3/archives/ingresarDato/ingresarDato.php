<?php
if (isset($_GET["numeros"])) {
    $numeros = json_decode($_GET["numeros"]);

    if (is_array($numeros) && count($numeros) === 5) {


        $mensaje = "<table border='1'><tr><th>Índice</th><th>Número</th><th>Rotado</th></tr>";
        $volteado = $numeros;
        $aux = array_pop($volteado);
        array_unshift($volteado, $aux);
        foreach ($numeros as $indice => $elemento) {
            $descripcion = $elemento;
            $rotar = $volteado[$indice];
            $mensaje .= "<tr><td>$indice</td><td>$descripcion</td><td>$rotar</td></tr>";
        }

        $mensaje .= "</table>";
        echo $mensaje;
    }
}
