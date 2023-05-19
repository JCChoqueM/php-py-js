<?php

//$nu1=5;
//$nu2=5;
//$nu3=5;
$nu1=$_POST["n1"];
$nu2=$_POST["n2"];
$nu3=$_POST["n3"];


$media = ($nu1+$nu2+$nu3)/3;

echo "<br/> &nbsp; DATOS RECIBIDOS";

echo "<br/> &nbsp; Precio producto establecido 1: ". $nu1. " Bs";

echo "<br/> &nbsp; Precio producto establecido 2: ". $nu2. " Bs";

echo "<br/> &nbsp; Precio producto establecido 3: ". $nu3. " Bs <br/>";

echo "<br/> &nbsp; El precio medio del producto es:". $media. " Bs";

?>