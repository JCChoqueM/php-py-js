<?php
/* SECTION inicio programa */
$mensaje = "";
$i = 0;
do {
	$mensaje .= "Soy el $i <br>";
	$i += 5;
} while ($i <= 100);
/* !SECTION fin programa */
echo $mensaje;
