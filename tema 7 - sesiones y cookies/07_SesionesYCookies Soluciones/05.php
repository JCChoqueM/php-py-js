<h3 style="text-align: center">Tienda on-line <b><i><u>La Estilográfica</u></i></b></h3>
<table style="border: 2px; margin: 0px 30px 0px 30px;"><tr><td>
<h3>Productos</h3><hr>
<?php
// Tienda ///////////////////////////////////////////////////////

$producto = array(
    "peli1000" => array("nombre" => "Pelikan Souvëran M-1000", "precio" => 545, "imagen" => "pelikan.jpg"),
    "parkduo" => array("nombre" => "Parker Duofold International", "precio" => 406, "imagen" => "parkerduo.jpg"),
    "viscvan" => array("nombre" => "Visconti Van Gogh", "precio" => 180, "imagen" => "visconti.jpg"),
    "waterexp" => array("nombre" => "Waterman Expert", "precio" => 103.55, "imagen" => "waterman.jpg")
);

foreach ($producto as $codigo => $elemento) {
    ?>
    <img src="img/<?= htmlspecialchars($elemento['imagen']) ?>" width="360" border="1"><br>
    <?= htmlspecialchars($elemento['nombre']) ?><br>Precio: <?= htmlspecialchars($elemento['precio']) ?> €
    <form action="pagina.php" method="post">
        <input type="hidden" name="ejercicio" value="05">
        <input type="hidden" name="codigo" value="<?= htmlspecialchars($codigo) ?>">
        <input type="hidden" name="accion" value="comprar">
        <input type="submit" value="Comprar">
    </form><br><br>
    <?php
}
?>

</td><td>			
<h3>Carrito</h3><hr>

<?php
// Carrito ///////////////////////////////////////////////////////
$accion = isset($_POST['accion']) ? htmlspecialchars($_POST['accion']) : null;
$codigo = isset($_POST['codigo']) ? htmlspecialchars($_POST['codigo']) : null;

// Inicializa el carrito la primera vez
if (!isset($_SESSION['carrito'])) {
    $_SESSION['carrito'] = array("peli1000" => 0, "parkduo" => 0, "viscvan" => 0, "waterexp" => 0);
}

if ($accion === "comprar" && isset($_SESSION['carrito'][$codigo])) {
    $_SESSION['carrito'][$codigo]++;
}

if ($accion === "eliminar" && isset($_SESSION['carrito'][$codigo])) {
    $_SESSION['carrito'][$codigo] = 0;
}

// Muestra el contenido del carrito
$total = 0;
foreach ($producto as $cod => $elemento) {
    if ($_SESSION['carrito'][$cod] > 0) {
        $total += $_SESSION['carrito'][$cod] * $elemento['precio'];
        ?>
        <img src="img/<?= htmlspecialchars($elemento['imagen']) ?>" width="200" border="1"><br>
        <?= htmlspecialchars($elemento['nombre']) ?><br>Precio: <?= htmlspecialchars($elemento['precio']) ?> €<br>
        Unidades: <?= htmlspecialchars($_SESSION['carrito'][$cod]) ?>
        <form action="pagina.php" method="post">
            <input type="hidden" name="ejercicio" value="05">
            <input type="hidden" name="codigo" value="<?= htmlspecialchars($cod) ?>">
            <input type="hidden" name="accion" value="eliminar">
            <input type="submit" value="Eliminar">
        </form><br><br>
        <?php
    }
}
?>
<b>Total: <?= htmlspecialchars($total) ?> €</b>
</td>
</tr>
</table>
