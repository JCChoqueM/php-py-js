<?php
function get_zodiac_sign($dia, $mes) {
    $signos = array(
        "Acuario" => array(array(1, 20), array(2, 18)),
        "Piscis" => array(array(2, 19), array(3, 20)),
        "Aries" => array(array(3, 21), array(4, 19)),
        "Tauro" => array(array(4, 20), array(5, 20)),
        "Géminis" => array(array(5, 21), array(6, 20)),
        "Cáncer" => array(array(6, 21), array(7, 22)),
        "Leo" => array(array(7, 23), array(8, 22)),
        "Virgo" => array(array(8, 23), array(9, 22)),
        "Libra" => array(array(9, 23), array(10, 22)),
        "Escorpio" => array(array(10, 23), array(11, 21)),
        "Sagitario" => array(array(11, 22), array(12, 21)),
        "Capricornio" => array(array(12, 22), array(1, 19))
    );

    foreach ($signos as $signo => $limites) {
        if (($mes == $limites[0][0] and $dia >= $limites[0][1]) or ($mes == $limites[1][0] and $dia <= $limites[1][1])) {
            return $signo;
        }
    }

    return "Desconocido";
}

$dia = 20;
$mes = 5;

$signo = get_zodiac_sign($dia, $mes);

echo "Su fecha de nacimiento es: " . $dia . " de " . $mes . "<br>";
echo "Su signo es: " . $signo;
