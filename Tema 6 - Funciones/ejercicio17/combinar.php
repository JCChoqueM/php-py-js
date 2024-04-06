<?php
$cadena = "1F3GA";
$tamaño = strlen($cadena);
for ($i = 0; $i <= $tamaño - 1; $i++) {
    if ($cadena[$i] >= chr(65) && $cadena[$i] <= chr(70)) {
        echo $cadena[$i] . PHP_EOL;
    } else {
        echo "NO" . PHP_EOL;
    }
}
