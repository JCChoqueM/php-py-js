<?php
/* SECTION inicio programa */
$mensaje = "";
$contador = 320;
do {
	$mensaje .= "Do-while: $contador <br>";
	$contador -= 20;
} while ($contador >= 160);
/* !SECTION fin programa */
echo $mensaje;
