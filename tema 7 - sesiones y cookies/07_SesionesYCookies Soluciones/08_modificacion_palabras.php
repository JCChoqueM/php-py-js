<h3>Modificación</h3><hr>
<?php
$espanol = isset($_POST['espanol']) ? htmlspecialchars($_POST['espanol']) : null;
$ingles = isset($_SESSION['diccionario'][$espanol]) ? htmlspecialchars($_SESSION['diccionario'][$espanol]) : null;

if ($espanol && $ingles) {
?>
<form action="pagina.php" method="post">
  <input type="hidden" name="ejercicio" value="08_admin_palabras">
  Español: <input type="text" name="espanol" value="<?= $espanol ?>" readonly="readonly"><br>
  Inglés: <input type="text" name="ingles" value="<?= $ingles ?>" required><br>
  <input type="submit" name="accion" value="Modificar">
</form>
<br><br>
<?php
} else {
    echo "Error: No se encontró la palabra para modificar.";
}
?>