<?php
$n;
$mensaje = "";
$i = 1;
$contador = 0;
for ($n = 2; $n <= 100; $n++) {
    while ($i <= $n) {
        if ($n % $i == 0) {
            $contador++;
        }
        $i++;
    }
    if ($contador <= 2) {
        $mensaje .= "($n)  ";
    }
    $i = 1;
    $contador = 0;
}
echo "$mensaje ";
