<?php
$data = json_decode(file_get_contents('php://input'));
if (isset($data->numeros) && isset($data->nombres)) {
    $numeros = $data->numeros;
    $nombres = $data->nombres;
    $repetir = "";
    $mensaje = "";
    $mensaje = "<table border='1'><tr><th>Índice</th><th>Mes</th><th>Temperatura</th></tr>";
    foreach ($numeros as $indice => $elemento) {
        $descripcion = $elemento;
        $mes = $nombres[$indice];
        $repetir = "";
        if ($elemento != 0) {
            if ($elemento > 0) {
                $imagen =
                    '<img src="././images/sol.png">';
            } else {
                $imagen =
                    '<img src="././images/frio.png">';
            }
        }
        for ($i = 0; $i < (abs($elemento)); $i++) {
            $repetir .= $imagen;
        }
        $mensaje .= "<tr><td>$indice</td><td>$mes</td><td>$repetir <br>$elemento ºC</td></tr>";
    }

    $mensaje .= "</table>";
    echo $mensaje;
}
