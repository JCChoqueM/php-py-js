<?php
$n;
$mensaje = "";
$contador = 0;
for ($n = 2; $n <= 100; $n++) {
    for ($i = 1; $i <= $n; $i++) {
        if ($n % $i == 0) {
            $contador++;
        }
    }
    if ($contador <= 2) {
        $mensaje .= "($n)  ";
    }
    $i = 1;
    $contador = 0;
}
echo "$mensaje ";
