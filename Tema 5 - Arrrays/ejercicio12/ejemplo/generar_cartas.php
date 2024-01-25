<?php

$puntuacion = array(
    'as' => 11, 'dos' => 0, 'tres' => 10, 'cuatro' => 0, 'cinco' => 0,
    'seis' => 0, 'siete' => 0, 'sota' => 2, 'caballo' => 3, 'rey' => 4
);

$palo = array('oros', 'copas', 'bastos', 'espadas');
$figura = array('as', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'sota', 'caballo', 'rey');

function generarCartas()
{
    global $puntuacion, $palo, $figura;

    $cartas = [];
    $puntosTotales = 0;

    while (count($cartas) < 10) {
        $paloCarta = $palo[rand(0, 3)];
        $figuraCarta = $figura[rand(0, 9)];
        $nombreCarta = "$figuraCarta de $paloCarta";
        $puntosCarta = $puntuacion[$figuraCarta];

        if (!in_array($nombreCarta, $cartas)) {
            $cartas[] = $nombreCarta;
            $puntosTotales += $puntosCarta;
        }
    }

    return [$cartas, $puntosTotales];
}

$cartasGeneradas = generarCartas();
echo json_encode($cartasGeneradas);
