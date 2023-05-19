<?php

//$nu1=5;
//$nu2=5;
//$nu3=5;
$a=$_POST["a"];
$b=$_POST["b"];
$c=$_POST["c"];

$dis=(sqrt(($b*$b)-(4*$a*$c)));

if ($a==0){ //No existen divisiones entre 0
    echo "El valor de a debe ser distinto de cero";
}
else{
if($dis>0){
    echo "existen 2 soluciones reales y distintas<br>";
    $x1=((($b*-1)+($dis))/(2*$a));
    $x2=((($b*-1)-($dis))/(2*$a));
    echo "El valor de x1=".round($x1,2)."</br>";
    echo "El valor de x2=".round($x2,2);
}
if($dis==0){
    echo "Existe una unica solucion</br>";
    $x1=((($b*-1)+($dis))/(2*$a));
    echo "El valor de x=".round($x1,2)."</br>";
}
if((($b*$b)-(4*$a*$c))<0){ //No exiten raices negativas
    echo "Existen 2 soluciones complejas distintas no puedo continuar";
}
}

?>