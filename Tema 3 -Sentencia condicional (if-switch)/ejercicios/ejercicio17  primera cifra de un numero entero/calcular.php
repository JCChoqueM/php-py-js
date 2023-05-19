<?php
$a = 624;
if (preg_match("/^-?\d{1,5}$/", $a)) {
    $a = abs($a);
    /*  if($a==0){
            echo "El numero es este ".$a;
            exit(); 
    } */
    switch (true) {
        case (0);
            echo "el primer digito sin sentido $a";
            break;
        case (($a >= 1 && $a <= 9) && $a != 0);
            echo "el primer digito es 1 " . $a;
            break;
        case ($a >= 10 && $a <= 99);
            echo "el primer digito es 12 " . (int)($a / 10);
            break;
        case ($a >= 100 && $a <= 999);
            echo "el primer digito es 123 " . (int)($a / 100);
            break;
        case ($a >= 1000 && $a <= 9999);
            echo "el primer digito es 1234 " . (int)($a / 1000);
            break;
        case ($a >= 10000 && $a <= 99999);
            echo "el primer digito 12345 " . (int)($a / 10000);
            break;
    }
} else {
    echo "Numero excede el valor permitido";
}
