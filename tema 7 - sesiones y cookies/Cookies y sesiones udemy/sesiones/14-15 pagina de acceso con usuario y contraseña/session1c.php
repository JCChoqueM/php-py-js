<?php
session_start();
if (isset($_SESSION["verificado"])) {
    echo "Bienvenido a la zona privada";
} else {
    header("Location: session1a.php?error=fuera");
}
?>
<input type="submit" value="salir" onclick="location.href='session1d.php'">