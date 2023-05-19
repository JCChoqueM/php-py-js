<!--Escribe un programa que dada una hora determinada (horas y minutos), calcule 
    los segundos que faltan para llegar a la medianoche-->
<?php
$h = $_POST['h'];
$m = $_POST['m']; {
    if ((($h) == 00) && (($m) == 00)) {
        echo "ya es media noche <br>";
    } else {
        if ((($h) >= 00) && (($h) <= 23)) {
        } else {
            echo "La hora debe estar entre las  00 y las 23 Hrs <br>";
        }
        if ((($m) >= 00) && (($m) <= 59)) {
        } else {
            echo "La minutos deben estar entre 00 y los 59 min<br>";
        }
    }
} {
    if (($h < 00) || ($h >= 24)) {
        echo " no se puede  realizar el calculo<br>";
    } else {
        if (($m < 00) || ($m >= 60)) {
            echo "no se puede realizar el calculo<br>";
        } else {
            $st = ($h * 3600) + ($m * 60);
            $sr = (24 * 3600) - $st;
            if ($sr != (24 * 3600)) {
                echo "Los segundos restantes  para la media noche son :" . $sr . " segundos";
            } else {
                echo "la siguiente media noche sera en :" . $sr . " segundos";
            }
        }
    }
}
