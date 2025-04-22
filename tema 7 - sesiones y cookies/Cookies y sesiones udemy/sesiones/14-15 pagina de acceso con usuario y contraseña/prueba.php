<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login JS + PHP</title>
</head>
<body>
<?php
session_start();

// LOGIN desde POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $usuarioCorrecto = "admin";
    $claveCorrecta = "123";

    $usuario = $_POST["usuario"] ?? "";
    $clave = $_POST["clave"] ?? "";

    if ($usuario === $usuarioCorrecto && $clave === $claveCorrecta) {
        $_SESSION["verificado"] = "si";
        $_SESSION["usuarioPHP"] = $usuario;
        header("Location: ?zonaPrivada=1");
        exit();
    } else {
        echo "<p style='color:red'>Credenciales incorrectas</p>";
    }
}

// CERRAR SESIÓN
if (isset($_GET["logout"])) {
    $_SESSION = [];
    session_destroy();
    echo "<p>Sesión cerrada</p>";
}

// ZONA PRIVADA
if (isset($_GET["zonaPrivada"])) {
    if (isset($_SESSION["verificado"]) && $_SESSION["verificado"] === "si") {
        echo "<h2>Zona Privada</h2>";
        echo "<p>PHP: Bienvenido, " . htmlspecialchars($_SESSION["usuarioPHP"]) . "</p>";
        echo "<p>JS: <span id='usuarioJS'></span></p>";
        echo "<button onclick='cerrarSesion()'>Cerrar sesión</button>";
        echo "<script>
            document.getElementById('usuarioJS').innerText = sessionStorage.getItem('usuarioJS');
            function cerrarSesion() {
                sessionStorage.clear();
                window.location.href = '?logout=1';
            }
        </script>";
        exit();
    } else {
        header("Location: ?error=1");
        exit();
    }
}
?>

<h2>Iniciar sesión</h2>
<form method="post" onsubmit="guardarSesionJS()">
    <input type="text" id="usuario" name="usuario" placeholder="Usuario" required><br>
    <input type="password" id="clave" name="clave" placeholder="Contraseña" required><br>
    <button type="submit">Entrar</button>
</form>

<script>
function guardarSesionJS() {
    const usuario = document.getElementById("usuario").value;
    sessionStorage.setItem("usuarioJS", usuario);
}
</script>
</body>
</html>
