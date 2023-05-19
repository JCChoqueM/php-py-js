<?php
$b = $_POST['a'];
echo "empiezo como cadena";
var_dump($b);
$b = abs($b);
echo "<br>ahora me volvi un entero<br>";
var_dump($b);
$b = intval($b);
$a = $b;
var_dump($b);
/* if($a==0){
    echo"<br>$a tengo 1 digito";
    exit();
} */
if ($a <= 99999) {
    switch ($a) {
        case ($a === 0):
            echo ($a . "No se lo que soy");
            var_dump($a);
            break;
        case ($a < 10):
            echo ($a . "soy menor que 10 tengo 1 digito");
            break;
        case ($a < 100):
            echo ($a . " tiene 2 digitos ");
            break;
        case ($a < 1000):
            echo ($a . " tiene 3 digitos ");
            break;
        case ($a < 10000):
            echo ($a . " tiene 4 digitos ");
            break;
        case ($a < 100000):
            echo ($a . " tiene 5 digitos ");
            break;
        default:
            echo ("aqui sus plegarias");
    }
} else {
    echo ($a . " <br>El valor excede la cantidad permitida");
}
