<?php
if (isset($_COOKIE["visita"])) {
    echo "Que bueno que nos visites nuevamente";
} else {
    setcookie("visita", "Night", time() + 4800);
    echo "Es tu primera visita";
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<h1>Soy el archivo cookies1.php</h1>

<body>
    <form>
        <input id="Actualizar" value="Actualizar" type="button" onclick="location.reload()" name="Actualizar">
        <input type="button" value="Volver al Formulario" onclick="location.href='cookies1.php'">
        <input type="button" value="verificar" onclick="location.href='cookies1c.php'">
        <input type="button" value="crear" onclick="location.href='cookies1b.php'">
        <input type="button" value="Eliminar" onclick="eliminarYCargar()">
    </form>
</body>
<script>
    function eliminarYCargar() {
        location.href = 'cookies1d.php'; // Redirige a cookies1d.php para eliminar cookies
        setTimeout(() => {
            location.href = 'cookies1.php'; // Luego, vuelve a cookies1.php
        }, 1000); // Espera 1 segundo para asegurarse de que la eliminación se ejecute
    }
</script>

</html>