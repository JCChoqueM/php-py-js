<?php
date_default_timezone_set("America/La_Paz");

if (isset($_COOKIE["contador"])) {
    echo $_COOKIE["contador"];
    setcookie("contador", $_COOKIE["contador"]+=1, time() + 4800);
    echo "<br>";
    echo $_COOKIE["contador"];
    echo "esta tu visita # " . $_COOKIE["contador"];
    echo "<br>";
    echo $_COOKIE["contador"];
} else {
    setcookie("contador", 1, time() + 4800);
    echo "Bienvenido esta es tu primera visita";
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