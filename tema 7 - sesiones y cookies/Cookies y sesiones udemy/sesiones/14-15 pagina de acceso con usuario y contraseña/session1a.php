<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    if (($_GET['error'] == "si")) {
        echo "Usuario o contraseña incorrectos";
        echo ($_GET['error']);
    } 
    if (($_GET['error'] == "fuera")) {
        echo "No puedes acceder a esta página. Introduzca usuario y contraseña. <br> <br>";
        echo ($_GET['error']);
    }
    echo "";
    ?>

    <form action="session1b.php" method="post">
        <div>
            <label for="usuario">nombre de usuario</label>
            <input id="usuario" type="text" name="usuario" placeholder="usuario">
        </div>
        <div>
            <label for="contrasena">contraseña</label>
            <input id="contrasena" type="password" name="contrasena" placeholder="contraseña">
        </div>
        <input type="submit" value="entrar">
        <input type="submit" value="salir" onclick="location.href='session1d.php'">
    </form>
</body>

</html>