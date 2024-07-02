<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
function posicionDeDigito($numero, $digito)
{
    if (digitos($numero) == digitos(voltea2($numero))) {
        $posicion = 0;
        $divisor = abs($numero);
        $encontrado = false;
        if ($divisor == 0) {
            return $posicion; // No encontrado
        }
        while ($divisor > 0) {
            if ($divisor % 10 == $digito) {
                $encontrado = true;
                break;
            } else {
                $posicion += 1;
                $divisor = intdiv($divisor, 10);
            }
        }
        if ($encontrado) {
            return $posicion;
        } else {
            return "No encontrado (-1)";
        }
    }
}
