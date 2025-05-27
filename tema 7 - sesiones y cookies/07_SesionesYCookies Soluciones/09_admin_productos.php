<h3>Administración de productos</h3>
<hr>

<?php
session_start();

// Asegurarse que la cookie 'producto' exista antes de usarla
if (isset($_COOKIE['producto'])) {
    $_SESSION['producto'] = unserialize($_COOKIE['producto']);
} else {
    $_SESSION['producto'] = [];
}

// Verificar si se envió una acción
if (isset($_POST['accion'])) {
    $accion = $_POST['accion'];
    $codigo = $_POST['codigo'] ?? null;

    if (($accion == "Alta" || $accion == "Modificar") && $codigo !== null) {
        // Validar que existan los campos necesarios
        $_SESSION['producto'][$codigo] = [
            "nombre" => htmlspecialchars($_POST['nombre'] ?? '', ENT_QUOTES),
            "precio" => floatval($_POST['precio'] ?? 0),
            "imagen" => htmlspecialchars($_POST['imagen'] ?? '', ENT_QUOTES),
            "detalle" => htmlspecialchars($_POST['detalle'] ?? '', ENT_QUOTES),
        ];

        $_SESSION['pagina'] = "pagina.php?ejercicio=09_admin_productos";
        header("Location: 09_grabaCookies.php");
        exit();
    }

    if ($accion == "Eliminar" && $codigo !== null) {
        unset($_SESSION['producto'][$codigo]);
        // No se puede eliminar directamente un elemento del array de cookie así
        // Se debe sobreescribir la cookie completa en 09_grabaCookies.php

        $_SESSION['pagina'] = "pagina.php?ejercicio=09_admin_productos";
        header("Location: 09_grabaCookies.php");
        exit();
    }
}
?>

<table border="1" cellpadding="10" cellspacing="0">
    <?php if (!empty($_SESSION['producto'])): ?>
        <?php foreach ($_SESSION['producto'] as $codigo => $elemento): ?>
            <tr>
                <td>
                    <img src="img/<?= htmlspecialchars($elemento['imagen'], ENT_QUOTES) ?>" width="300" alt="<?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?>" border="1"><br>
                    <?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?><br>
                    Precio: <?= number_format($elemento['precio'], 2) ?> €
                </td>
                <td><?= nl2br(htmlspecialchars($elemento['detalle'], ENT_QUOTES)) ?></td>
                <td>
                    <form action="pagina.php" method="post" style="display:inline-block;">
                        <input type="hidden" name="ejercicio" value="09_admin_productos">
                        <input type="hidden" name="codigo" value="<?= htmlspecialchars($codigo, ENT_QUOTES) ?>">
                        <input type="hidden" name="accion" value="Eliminar">
                        <input type="submit" value="Eliminar" onclick="return confirm('¿Está seguro de eliminar este producto?');">
                    </form>
                    <form action="pagina.php" method="post" style="display:inline-block; margin-left: 10px;">
                        <input type="hidden" name="ejercicio" value="09_modificacion_producto">
                        <input type="hidden" name="codigo" value="<?= htmlspecialchars($codigo, ENT_QUOTES) ?>">
                        <input type="hidden" name="accion" value="Modificar">
                        <input type="submit" value="Modificar">
                    </form>
                </td>
            </tr>
        <?php endforeach; ?>
    <?php else: ?>
        <tr><td colspan="3">No hay productos disponibles.</td></tr>
    <?php endif; ?>
</table>

<hr>
<table>
    <tr>
        <td>
            <form action="pagina.php" method="post">
                <input type="hidden" name="ejercicio" value="09_alta_producto">
                <input type="submit" value="Añadir nuevo producto">
            </form>
        </td>
        <td>
            <form action="pagina.php" method="post">
                <input type="hidden" name="ejercicio" value="09">
                <input type="hidden" name="accion" value="borrarCookies">
                <input type="submit" value="Borrar todo e inicializar a productos por defecto" onclick="return confirm('¿Está seguro de borrar todos los productos y reiniciar?');">
            </form>
        </td>
        <td>
            <form action="pagina.php" method="post">
                <input type="hidden" name="ejercicio" value="09">
                <input type="submit" value="Regresar a la tienda">
            </form>
        </td>
    </tr>
</table>
