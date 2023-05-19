<!--Igual que el programa anterior, pero esta vez la piramide debe aparecer invertida, con el vértice 
hacia abajo.-->
<?php
echo str_repeat("&nbsp;", 0), str_repeat("*&nbsp;", 9), "<br>"; // base del triangulo
//echo str_repeat("&nbsp;", 0), str_repeat("*&nbsp;", 9), "<br>"; // base del triangulo
//echo str_repeat("&nbsp;", 0), "*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*<br>";

echo str_repeat("&nbsp;", 3), "*", str_repeat("&nbsp;", 16), "*<br>";

echo str_repeat("&nbsp;", 6), "*", str_repeat("&nbsp;", 10), "*<br>";

echo str_repeat("&nbsp;", 9), "*", str_repeat("&nbsp;", 4), "*<br>";


echo str_repeat("&nbsp;", 12), str_repeat("*", 1), "<br>";//punta de la piramide
//echo str_repeat("&nbsp;", 12), str_repeat("&nbsp;", 1), "<br>";