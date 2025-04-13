<?php
// Si se envía un color, guardarlo en una cookie con duración de 30 días
echo $_POST['color'];
if (isset($_POST['color'])) {
    if ($_POST['color'] == 'delete') {
        // Si el valor es "delete", eliminamos la cookie
        setcookie('bg_color', '', time() - 3600, "/"); // La cookie expira en el pasado
        $color = 'whiter'; // Color por defecto al eliminar la cookie
    } else {
        // Si se selecciona un color, lo guardamos en la cookie
        setcookie('bg_color', $_POST['color'], time() + (30 * 24 * 60 * 60), "/");
        $color = $_POST['color']; // Actualizar el color en la sesión actual
    }
} else {
    // Si existe la cookie, usar su valor, sino establecer blanco por defecto
    $color = isset($_COOKIE['bg_color']) ? $_COOKIE['bg_color'] : 'whiter';
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
        <label for="color">Escoge tu color de fondo</label>
        <select name="color" id="color">
            <option value="red">Rojo</option>
            <option value="blue">Azul</option>
            <option value="green">Verde</option>
            <option value="yellow">Amarillo</option>
            <option value="whiter">Blanco</option>
        </select>
        <button type="submit">Guardar</button>
    </form>

    <form method="post">
        <button type="submit" name="color" value="delete">Eliminar Cookie (Restaurar a Blanco)</button>
    </form>

</body>
</html>
