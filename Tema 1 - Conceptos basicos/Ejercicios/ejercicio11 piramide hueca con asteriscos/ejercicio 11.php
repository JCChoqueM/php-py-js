<!--igual que el programa anterior, pero esta vez la piramide estará hueca(se debe ver únicamente el
contorno hecho con asteriscos).
-----los numeros (123456) representan los espacios, reemplazar con: &nbsp -->
<?php

echo str_repeat("&nbsp;", 12), str_repeat("*", 1), "<br>"; //punta de la piramide
//echo str_repeat("&nbsp;", 12), "*<br>";
//echo str_repeat("&nbsp;", 12), str_repeat("*&nbsp;", 1), "<br>";
echo str_repeat("&nbsp;", 9), "*", str_repeat("&nbsp;", 4), "*<br>";

echo str_repeat("&nbsp;", 6), "*", str_repeat("&nbsp;", 10), "*<br>";

echo str_repeat("&nbsp;", 3), "*", str_repeat("&nbsp;", 16), "*<br>";


echo str_repeat("&nbsp;", 0), str_repeat("*&nbsp;", 9), "<br>"; //base de la piramide
//echo str_repeat("&nbsp;", 0), "*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*<br>";