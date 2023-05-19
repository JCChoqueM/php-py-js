<!--Realiza un programa que resuelva una ecuacion de primer grado del tipo (ax + b = 0)-->
<?php

$diametro = $_GET['dia'];

$altura = $_GET['alt'];

if ($diametro==0){
    echo str_repeat("&nbsp;",20)."DATOS RECIBIDOS";
    echo "<br>el valor de 'a' no deber ser igual a 0";
}
else{
    echo str_repeat("&nbsp",20)."DATOS RECIBIDOS";
    echo "<br>El valor de 'x' es:".(($altura*-1)/$diametro);

}




?>