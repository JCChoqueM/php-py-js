<?php
$persona = ["pedro", "perez", 26];
setcookie("micookie[nombre]", $persona[0], time() + 3600);
setcookie("micookie[apellido]", $persona[1], time() + 3600);
setcookie("micookie[edad]", $persona[2], time() + 3600);

echo "El nombre es: " . $_COOKIE["micookie"]["nombre"];
echo "<br>";
echo "El apellido es: " . $_COOKIE["micookie"]["apellido"];
echo "<br>";
echo "edad es: " . $_COOKIE["micookie"]["edad"];
echo "<br>";
echo $_COOKIE["micookie"];
echo "<br>";
var_dump($_COOKIE["micookie"]);
echo "<br>";
echo "---------------------------";
echo "<br>";

$limonero["fruta"]="limon";
$limonero["verdura"]="haba";
echo ($limonero);
echo "<br>";
var_dump($limonero);
