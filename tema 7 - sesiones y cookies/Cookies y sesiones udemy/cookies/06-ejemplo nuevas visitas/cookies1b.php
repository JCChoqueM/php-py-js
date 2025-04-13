<h1>soy el archibo cookies1b.php</h1>
<?php

setcookie("visita2", "creada", time() + 4800);
header("Location: cookies1.php");
?>
<br>
<form>
    <input id="Actualizar" value="Actualizar" type="button" onclick="location.reload()" name="Actualizar">
    <input type="button" value="Volver al Formulario" onclick="location.href='cookies1.php'">
    <input type="button" value="verificar" onclick="location.href='cookies1c.php'">
    <input type="button" value="Eliminar" onclick="location.href='cookies1d.php'">
</form>