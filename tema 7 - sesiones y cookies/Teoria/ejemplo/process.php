<?php
session_start(); // Inicia la sesión

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtiene los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $precio = floatval($_POST['precio']);
    $imagen = htmlspecialchars($_POST['imagen']);
    $detalle = htmlspecialchars($_POST['detalle']);

    // Inicializa la variable de sesión para productos si no existe
    if (!isset($_SESSION['productos'])) {
        $_SESSION['productos'] = [];
    }

    // Agrega el producto a la sesión
    $_SESSION['productos'][] = [
        'nombre' => $nombre,
        'precio' => $precio,
        'imagen' => $imagen,
        'detalle' => $detalle
    ];

    // Opcional: guarda los productos en una cookie
    setcookie('productos', serialize($_SESSION['productos']), time() + (86400 * 30), "/"); // Expira en 30 días

    // Respuesta del servidor
    echo 'Producto agregado con éxito';
}
