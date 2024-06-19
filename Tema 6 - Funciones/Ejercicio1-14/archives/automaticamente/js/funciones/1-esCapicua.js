
// app/includes/archivo2.php

function esCapicua($numero)
{
    $numeroOriginal = $numero;
    $numero = (abs($numero));
    $volteado = 0;
    $digito = null;
    while ($numero > 0) {
        $digito = $numero % 10;
        $volteado = $volteado * 10 + $digito;
        $numero = intdiv($numero, 10);
    }

    // Comparar la cadena original con la invertida
    if (abs($numeroOriginal) === $volteado) {
        return `El número <span style='color: green'>  ${Math.abs($numeroOriginal)} . </span> es capicúa`;
    } else {
        return `El número <span style='color: red'>  ${Math.abs($numeroOriginal)} . </span> NO es capicúa`;
    }
}
