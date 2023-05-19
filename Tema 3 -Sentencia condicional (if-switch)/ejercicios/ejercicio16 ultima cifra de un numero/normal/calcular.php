<!-- escribe un programa que diga cual es la ultima cifra de un número introducido por teclado-->
<?php
$a = $_GET['a'];
if ($a < 0) {
    $a = abs($a);
}
echo "el ultimo digito de $a es" . $a % 10;
