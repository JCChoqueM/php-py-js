<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Soy el archibo cookies1d.php</h1>

    <p>as salido de la sescion la cookie a sido eliminada</p>

    <?php
    setcookie("nombre", "$_COOKIE[nombre]", time() - 1000);
    ?>
    <form>
        <input id="Actualizar" value="Actualizar" type="button" onclick="location.reload()" name="Actualizar">
        <input type="button" value="Volver al Formulario" onclick="location.href='cookies1.php'">
        <input type="button" value="verificar" onclick="location.href='cookies1c.php'">
        <input type="button" value="Eliminar" onclick="location.href='cookies1d.php'">
    </form>

</body>

</html>