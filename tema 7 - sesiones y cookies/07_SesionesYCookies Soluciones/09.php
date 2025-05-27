<?php
session_start();

// Carga los productos almacenados en las cookies, si existe
if (isset($_COOKIE['producto'])) {
    $_SESSION['producto'] = unserialize($_COOKIE['producto']);
}

// Borrado de cookies y variables
if (isset($_POST['accion']) && $_POST['accion'] === "borrarCookies") {
    setcookie("producto", "", time() - 3600);
    unset($_COOKIE['producto']);
    unset($_SESSION['producto']);
    $_SESSION['pagina'] = "pagina.php?ejercicio=09";
    header("Location: limpiaPost.php");
    exit;
}

// Inicializar productos si no hay cookie ni sesión con productos
if (!isset($_COOKIE['producto']) && !isset($_SESSION['producto'])) {
    $_SESSION['producto'] = [
        "peli1000" => [
            "nombre" => "Pelikan Souvëran M-1000",
            "precio" => 545,
            "imagen" => "pelikan.jpg",
            "detalle" => "Plumín de oro 18K.  Émbolo de bronce. Fabricación alemana. Excelentes acabados."
        ],
        "parkduo" => [
            "nombre" => "Parker Duofold International",
            "precio" => 406,
            "imagen" => "parkerduo.jpg",
            "detalle" => "Plumín de oro 18K. Fabricada en Reino Unido. Cuerpo en resina de alta resistencia."
        ],
        "viscvan" => [
            "nombre" => "Visconti Van Gogh",
            "precio" => 180,
            "imagen" => "visconti.jpg",
            "detalle" => "Diseño y acabados de lujo. Cuerpo fabricado en Italia. Plumín alemán."
        ],
        "waterexp" => [
            "nombre" => "Waterman Expert",
            "precio" => 103.55,
            "imagen" => "waterman.jpg",
            "detalle" => "Excelente pluma de uso diario. Fabricada en Francia. Plumín de acero."
        ]
    ];
    $_SESSION['pagina'] = "pagina.php?ejercicio=09";
    header("Location: 09_grabaCookies.php");
    exit;
}

?>

<h3 style="text-align: center;">Tienda on-line <b><i><u>La Estilográfica</u></i></b></h3>
<table style="border-collapse: collapse; margin: 0 30px; width: 100%;">
  <tr>
    <td style="vertical-align: top; width: 50%; padding: 10px; border-right: 1px solid #ccc;">
      <h3>Productos</h3>
      <hr>
      <?php
      foreach ($_SESSION['producto'] as $codigo => $elemento) {
      ?>
        <div style="margin-bottom: 30px;">
          <img src="img/<?= htmlspecialchars($elemento['imagen'], ENT_QUOTES) ?>" width="360" border="1" alt="<?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?>"><br>
          <strong><?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?></strong><br>
          Precio: <?= number_format($elemento['precio'], 2) ?> €<br>
          <form action="pagina.php" method="post" style="display:inline-block; margin-right: 10px;">
            <input type="hidden" name="ejercicio" value="09_detalle">
            <input type="hidden" name="codigo" value="<?= htmlspecialchars($codigo, ENT_QUOTES) ?>">
            <input type="hidden" name="accion" value="detalle">
            <input type="submit" value="Detalle">
          </form>
          <form action="pagina.php" method="post" style="display:inline-block;">
            <input type="hidden" name="ejercicio" value="09">
            <input type="hidden" name="codigo" value="<?= htmlspecialchars($codigo, ENT_QUOTES) ?>">
            <input type="hidden" name="accion" value="comprar">
            <input type="submit" value="Comprar">
          </form>
        </div>
      <?php
      }
      ?>
    </td>
    <td style="vertical-align: top; width: 50%; padding: 10px;">
      <h3>Carrito</h3>
      <hr>
      <?php
      $accion = $_POST['accion'] ?? '';
      $codigo = $_POST['codigo'] ?? '';

      // Inicializa el carrito la primera vez
      if (!isset($_SESSION['carrito'])) {
          $_SESSION['carrito'] = [];
          foreach ($_SESSION['producto'] as $cod => $datos) {
              $_SESSION['carrito'][$cod] = 0;
          }
      }

      if ($accion === "comprar" && isset($_SESSION['producto'][$codigo])) {
          $_SESSION['carrito'][$codigo]++;
      }

      if ($accion === "eliminar" && isset($_SESSION['carrito'][$codigo])) {
          $_SESSION['carrito'][$codigo] = 0;
      }

      // Muestra el contenido del carrito
      $total = 0;
      foreach ($_SESSION['producto'] as $cod => $elemento) {
          $unidades = $_SESSION['carrito'][$cod] ?? 0;
          if ($unidades > 0) {
              $subtotal = $unidades * $elemento['precio'];
              $total += $subtotal;
      ?>
              <div style="margin-bottom: 20px;">
                <img src="img/<?= htmlspecialchars($elemento['imagen'], ENT_QUOTES) ?>" width="200" border="1" alt="<?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?>"><br>
                <strong><?= htmlspecialchars($elemento['nombre'], ENT_QUOTES) ?></strong><br>
                Precio unitario: <?= number_format($elemento['precio'], 2) ?> €<br>
                Unidades: <?= intval($unidades) ?><br>
                Subtotal: <?= number_format($subtotal, 2) ?> €<br>
                <form action="pagina.php" method="post" style="margin-top: 5px;">
                  <input type="hidden" name="ejercicio" value="09">
                  <input type="hidden" name="codigo" value="<?= htmlspecialchars($cod, ENT_QUOTES) ?>">
                  <input type="hidden" name="accion" value="eliminar">
                  <input type="submit" value="Eliminar">
                </form>
              </div>
      <?php
          }
      }
      ?>
      <b>Total: <?= number_format($total, 2) ?> €</b>
    </td>
  </tr>
</table>

<form action="pagina.php" method="post" style="margin-top: 20px; text-align: center;">
  <input type="hidden" name="ejercicio" value="09_admin_productos">
  <input type="submit" value="Administrar los productos">
</form>
