<h1>soy el archibo cookies1b.php</h1>
<?php
$nombre = $_POST["nombre"];
setcookie("nombre", $nombre, time() + 4800);
echo "estoy creando la cookie:  " . $nombre;
echo "<br>";
if ($_COOKIE["nombre"] != Null) {
    echo "La cookie tiene el valor de: " . $_COOKIE["nombre"];
} else {
    echo "La cookie tiene el valor de: Null Se a creado pero no puede ser usado aun";
    echo "<br>";
    echo "Por favor recargue la pagina";
};
?>
<br>
<form>
    <input id="Actualizar" value="Actualizar" type="button" onclick="location.reload()" name="Actualizar">
    <input type="button" value="Volver al Formulario" onclick="location.href='cookies1.php'">
    <input type="button" value="verificar" onclick="location.href='cookies1c.php'">
    <input type="button" value="Eliminar" onclick="location.href='cookies1d.php'">
</form>