<?php

date_default_timezone_set("America/La_Paz");

$fecha = date("Y-m-d H:i:s", time());
setcookie("visita", $fecha, time() + 4800);
if (isset($_COOKIE["visita"])) {
    echo "Tu ultima visita fue el:" . $_COOKIE["visita"];
} else {
    echo "Es tu primera visita";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<h1>Soy el archivo cookies1.php</h1>

<body>
    <form>
        <input id="Actualizar" value="Actualizar" type="button" onclick="location.reload()" name="Actualizar">
        <input type="button" value="Volver al Formulario" onclick="location.href='cookies1.php'">
        <input type="button" value="verificar" onclick="location.href='cookies1c.php'">
        <input type="button" value="crear" onclick="location.href='cookies1b.php'">
        <input type="button" value="Eliminar" onclick="location.href='cookies1d.php'">
    </form>
</body>


</html>