<!--Escribe un programa que pinte por pantalla una pirámide rellena a base de asteriscos. La base de la
pirámide debe estar formada por 9 asteriscos.
-----los numeros (123456) representan los espacios, reemplazar con: &nbsp    -->
<?php
//echo '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp', "*<br>"; //echo '123456789-10-11-12'  , "*<br>";
//echo '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp', "*&nbsp*&nbsp*<br>"; //echo '123456789',  "*1*2*<br>;
//echo '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp', "*&nbsp*&nbsp*&nbsp*&nbsp*<br>"; //echo  '123456',  "*1*2*3*4*<br>";
//echo '&nbsp&nbsp&nbsp', "*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*<br>"; //echo '123',  "*1*2*3*4*5*6*<br>";
//echo "*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*<br>";

echo str_repeat("&nbsp;", 12),  str_repeat("*", 1), "<br>"; // punta de la piramide
//echo str_repeat("&nbsp;", 12),  str_repeat("*&nbsp;", 1), "<br>"; // punta de la piramide
//echo str_repeat("&nbsp;", 12),  "*<br>";
echo str_repeat("&nbsp;", 9),   str_repeat("*&nbsp;", 3), "<br>";
//echo str_repeat("&nbsp;", 9),   "*&nbsp*&nbsp*<br>";
echo str_repeat("&nbsp;", 6),   str_repeat("*&nbsp;", 5), "<br>";
//echo str_repeat("&nbsp;", 6),   "*&nbsp*&nbsp*&nbsp*&nbsp*<br>";
echo str_repeat("&nbsp;", 3),   str_repeat("*&nbsp;", 7), "<br>";
//echo str_repeat("&nbsp;", 3),   "*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*<br>";
echo str_repeat("&nbsp;", 0),   str_repeat("*&nbsp;", 9), "<br>"; // base de la piramide
//echo str_repeat("&nbsp;", 0),   "*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*&nbsp*<br>";