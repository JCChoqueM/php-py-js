<?php
// Leer la cookie creada por PHP
$nombre_usuario = isset($_COOKIE['nombre_usuario_php']) ? $_COOKIE['nombre_usuario_php'] : "Cookie no encontrada.";
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar Cookie con PHP</title>
</head>

<body>
    <h1>Mostrar Cookie con PHP</h1>
    <p>Nombre de usuario desde la cookie (leída por PHP): <?php echo htmlspecialchars($nombre_usuario); ?></p>
    <a href="index.html">Volver a la página principal</a>
</body>

</html>