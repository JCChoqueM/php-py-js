<?php
$usuarioOk = "pep";
$contrasenaOk = "123";

if ($_POST["usuario"] == $usuarioOk && $_POST["contrasena"] == $contrasenaOk) {
    session_start();
    $_SESSION["verificado"] = "si";
    var_dump($_SESSION);
    echo "Tienes acceso a la página privada<br>";
    echo "Bienvenido " . $_POST["usuario"];
    echo "<br>";    
    echo "<a href='session1c.php'>Ve a ver el contenido privado</a>";
} else {
    header("Location: session1a.php?error=si");
}
