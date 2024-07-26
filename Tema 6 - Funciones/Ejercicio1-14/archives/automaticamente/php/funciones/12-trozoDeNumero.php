<?php
include __DIR__ . '/../funciones/funciones.php';
function trozoDeNumero($numero, $inicial, $final)
{
    $absNumero = abs($numero);
    $digitoNumero = digitos($numero);
    $exponenteDetras = $digitoNumero - ($final + 1);
    $quitaDetras = intdiv($numero, (potencia(10, $exponenteDetras)));
    $digitoNumero = digitos($quitaDetras);
    $exponenteDelante = $digitoNumero - $inicial;
    $quitaDelante = $quitaDetras % (potencia(10, $exponenteDelante));
    $digitoNumero = digitos($quitaDelante);
    if ($digitoNumero < $exponenteDelante) {
        $especial = "";
        for ($contador = $digitoNumero; $contador <= $exponenteDelante - 1; $contador++) {
            $especial .= "0";
        }
        $mensajeEspecial = "El trozo de numero es:<br> Literal: $especial$quitaDelante <br>Numeral: $quitaDelante";
        return $mensajeEspecial;
    } else {
        return "El trozo de numero es: $quitaDelante";
    }
}
