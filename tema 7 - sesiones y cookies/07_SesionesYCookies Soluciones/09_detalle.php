<h3>Detalle del producto</h3>
<hr>
<?php
session_start();

// Validar que 'codigo' venga en POST y que exista en $_SESSION['producto']
if (isset($_POST['codigo'], $_SESSION['producto']) && array_key_exists($_POST['codigo'], $_SESSION['producto'])) {
    $codigo = $_POST['codigo'];
    $producto = $_SESSION['producto'];
    $elemento = $producto[$codigo];

    // Cantidad en carrito, validar que exista
    $cantidadCarrito = $_SESSION['carrito'][$codigo] ?? 0;
    ?>
    <img src="img/<?= htmlspecialchars($elemento['imagen'], ENT_QUOTES) ?>" width="360" border="1" alt="<?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?>"><br>
    <strong><?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?></strong><br>
    Precio: <?= number_format($elemento['precio'], 2) ?> €<br>
    Unidades de este producto en el carrito: <?= intval($cantidadCarrito) ?><br><br>
    <?= nl2br(htmlspecialchars($elemento['detalle'], ENT_QUOTES)) ?>
    <form action="pagina.php" method="post" style="margin-top: 20px;">
        <input type="hidden" name="ejercicio" value="09">
        <input type="hidden" name="codigo" value="<?= htmlspecialchars($codigo, ENT_QUOTES) ?>">
        <input type="hidden" name="accion" value="comprar">
        <input type="submit" value="Comprar">
    </form>
    <form action="pagina.php" method="post" style="margin-top: 10px;">
        <input type="hidden" name="ejercicio" value="09">
        <input type="submit" value="Volver a la tienda">
    </form>
    <?php
} else {
    echo "<p>Producto no encontrado o código inválido.</p>";
    ?>
    <form action="pagina.php" method="post">
        <input type="hidden" name="ejercicio" value="09">
        <input type="submit" value="Volver a la tienda">
    </form>
    <?php
}
?>
