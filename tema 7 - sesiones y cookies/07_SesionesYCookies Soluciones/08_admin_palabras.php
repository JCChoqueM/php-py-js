<h3>Administración de palabras</h3><hr>
<?php
// Comprueba si se ha enviado un formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $accion = isset($_POST['accion']) ? htmlspecialchars($_POST['accion']) : null;
    $espanol = isset($_POST['espanol']) ? htmlspecialchars($_POST['espanol']) : null;
    $ingles = isset($_POST['ingles']) ? htmlspecialchars($_POST['ingles']) : null;

    // Inicializa el diccionario si no existe
    if (!isset($_SESSION['diccionario'])) {
        $_SESSION['diccionario'] = array();
    }

    // Comprueba la acción a realizar
    if ($accion === "Alta" && $espanol && $ingles) {
        // Añade una nueva palabra al diccionario
        $_SESSION['diccionario'][$espanol] = $ingles;
    } elseif ($accion === "Modificar" && $espanol && $ingles) {
        // Modifica una palabra existente en el diccionario
        if (isset($_SESSION['diccionario'][$espanol])) {
            $_SESSION['diccionario'][$espanol] = $ingles;
        }
    } elseif ($accion === "Eliminar" && $espanol) {
        // Elimina una palabra del diccionario
        unset($_SESSION['diccionario'][$espanol]);
        setcookie($espanol, '', time() - 3600); // Elimina la cookie asociada
    } elseif ($accion === "borrarCookies") {
        // Borra todas las cookies y reinicia el diccionario
        foreach ($_SESSION['diccionario'] as $key => $value) {
            setcookie($key, '', time() - 3600);
        }
        $_SESSION['diccionario'] = array(); // Reinicia el diccionario
    }
}

// Muestra el diccionario de palabras
$diccionario = isset($_SESSION['diccionario']) ? $_SESSION['diccionario'] : array();

echo "<table border='1'>";
foreach ($diccionario as $espanol => $ingles) {
    ?>
    <tr>
        <td><?= htmlspecialchars($espanol) ?></td>
        <td><?= htmlspecialchars($ingles) ?></td>
        <td>
            <form action="pagina.php" method="post">
                <input type="hidden" name="ejercicio" value="08_admin_palabras">
                <input type="hidden" name="espanol" value="<?= htmlspecialchars($espanol) ?>">
                <input type="submit" name="accion" value="Eliminar">
            </form>
        </td>
        <td>
            <form action="pagina.php" method="post">
                <input type="hidden" name="ejercicio" value="08_modificacion_palabras">
                <input type="hidden" name="espanol" value="<?= htmlspecialchars($espanol) ?>">
                <input type="submit" value="Modificar">
            </form>
        </td>
    </tr>
    <?php
}
?>
</table>

<hr>
<table>
    <tr>
        <td>
            <form action="pagina.php" method="post">
                <input type="hidden" name="ejercicio" value="08_alta_palabra">
                <input type="submit" value="Añadir nueva palabra">
            </form>
        </td>
        <td>
            <form action="pagina.php" method="post">
                <input type="hidden" name="ejercicio" value="08_admin_palabras">
                <input type="hidden" name="accion" value="borrarCookies">
                <input type="submit" value="Borrar todo e inicializar a diccionario por defecto">
            </form>
        </td>
    </tr>
</table>