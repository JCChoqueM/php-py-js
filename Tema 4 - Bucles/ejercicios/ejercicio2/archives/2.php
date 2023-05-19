<?php
/* SECTION inicio programa */
$mensaje = "";
$i = 0;
while ($i <= 100) {
	$mensaje .= "0 a 100: " . $i . "<br>";
	$i = $i + 5;
}
/* !SECTION fin programa */
echo $mensaje;
