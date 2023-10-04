<?php
if (isset($_GET["numeros"])) {
    $numeros = json_decode($_GET["numeros"]);

    if (is_array($numeros) && count($numeros) === 5) {
        $max = max($numeros);
        $min = min($numeros);

        $mensaje = "<table border='1'><tr><th>Índice</th><th>Número</th></tr>";

        foreach ($numeros as $indice => $elemento) {
            if ($elemento == $min && $elemento == $max) {
                $descripcion = "$elemento es max y min";
            } elseif ($elemento == $min) {
                $descripcion = "$elemento mínimo";
            } elseif ($elemento == $max) {
                $descripcion = "$elemento máximo";
            } else {
                $descripcion = $elemento;
            }
            $mensaje .= "<tr><td>$indice</td><td>$descripcion</td></tr>";
        }

        $mensaje .= "</table>";
        echo $mensaje;
    }
}
