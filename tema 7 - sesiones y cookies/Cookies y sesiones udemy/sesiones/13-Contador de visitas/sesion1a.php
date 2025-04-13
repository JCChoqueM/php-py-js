<?php
date_default_timezone_set("America/La_Paz");
session_start();
if (isset($_SESSION["contador"])) {
    echo $_SESSION["contador"];
    echo "<br>";
    echo "esta tu visita # " . $_SESSION["contador"] += 1;
    echo "<br>";
    echo $_SESSION["contador"];
} else {
    $_SESSION["contador"] = 1;
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

    </form>
</body>


</html>