<h3>Detalle del producto</h3><hr>
<?php
$codigo = isset($_POST['codigo']) ? htmlspecialchars($_POST['codigo']) : null;
$producto = isset($_SESSION['producto']) ? $_SESSION['producto'] : array();

if ($codigo && isset($producto[$codigo])) {
    $elemento = $producto[$codigo];
    ?>
    <img src="img/<?= htmlspecialchars($elemento['imagen']) ?>" width="360" border="1"><br>
    <?= htmlspecialchars($elemento['nombre']) ?><br>Precio: <?= htmlspecialchars($elemento['precio']) ?> €
    Unidades de este producto en el carrito: <?= htmlspecialchars($_SESSION['carrito'][$codigo]) ?><br>
    <?= htmlspecialchars($elemento['detalle']) ?>
    <form action="pagina.php" method="post">
        <input type="hidden" name="ejercicio" value="06">
        <input type="hidden" name="codigo" value="<?= htmlspecialchars($codigo) ?>">
        <input type="hidden" name="accion" value="comprar">
        <input type="submit" value="Comprar">
    </form>
    <form action="pagina.php" method="post">
        <input type="hidden" name="ejercicio" value="06">
        <input type="submit" value="Volver a la tienda">
    </form>
    <br><br>
    <?php
} else {
    echo "Producto no encontrado.";
}
?>