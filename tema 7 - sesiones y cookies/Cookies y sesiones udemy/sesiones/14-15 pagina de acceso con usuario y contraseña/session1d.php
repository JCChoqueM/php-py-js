<?php
session_start(); // Iniciar la sesión si aún no está iniciada

// 1️⃣ Eliminar todas las variables de sesión
$_SESSION = [];

// 2️⃣ Destruir la sesión en el servidor
session_destroy();

// 3️⃣ Opcional: Eliminar la cookie de sesión si existe
if (ini_get("session.use_cookies")) {
    setcookie(session_name(), '', time() - 3600, '/');
}

// 4️⃣ Redirigir a la página de inicio o login
header("Location: session1a.php");
exit();
