<?php
// Si se envía un color, guardarlo en una cookie con duración de 30 días
echo $_POST['color'];
if (isset($_POST['color'])) {
    setcookie('bg_color', $_POST['color'], time() + (30 * 24 * 60 * 60), "/");
    $color = $_POST['color']; // Actualizar el color en la sesión actual
} else {
    // Si existe la cookie, usar su valor, sino establecer blanco por defecto
    $color = isset($_COOKIE['bg_color']) ? $_COOKIE['bg_color'] : 'white';
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar Color con Cookies</title>
    <style>
        body {
            background-color: <?= htmlspecialchars($color); ?>;
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }

        button {
            padding: 10px 20px;
            margin: 5px;
            border: 2px solid black;
            cursor: pointer;
            font-size: 16px;

        }
    </style>
</head>

<body>

    <h2>Elige un color de fondo (Guardado en Cookies)</h2>

    <form method="post">
        <button type="submit" name="color" value="red" style="background-color: red; color: white;">Rojo</button>
        <button type="submit" name="color" value="blue" style="background-color: blue; color: white;">Azul</button>
        <button type="submit" name="color" value="green" style="background-color: green; color: white;">Verde</button>
        <button type="submit" name="color" value="yellow" style="background-color: yellow; color: black;">Amarillo</button>
        <button type="submit" name="color" value="white" style="background-color: white; color: black;">Blanco</button>
    </form>

</body>

</html>