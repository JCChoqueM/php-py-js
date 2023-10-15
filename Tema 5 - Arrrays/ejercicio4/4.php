<?php
// Comprueba si el parámetro 'numeroTexto' no está definido en la URL
if (!isset($_GET['numeroTexto'])) {
    // Genera un array aleatorio de 100 números enteros entre 0 y 20
    $numero = array(); // Se inicializa un arreglo vacío
    for ($i = 0; $i < 100; $i++) {
        $numero[$i] = rand(0, 20); // Genera un número aleatorio y lo agrega al arreglo
        echo $numero[$i] . " "; // Imprime cada número generado en la página
    }

    // Convierte el arreglo en una cadena separada por espacios
    $numeroTexto = implode(" ", $numero);
?>
    <br><br>
    <form action="4.php" method="get">
        <!-- Crea un formulario que envía los valores a la misma página "4.php" -->
        <input type="hidden" name="ejercicio" value="04">
        Valor a sustituir: <input type="number" name="viejo" autofocus="" required=""><br>
        Valor nuevo: <input type="number" name="nuevo" required="">
        <input type="hidden" name="numeroTexto" value="<?php echo $numeroTexto; ?>">
        <input type="submit" value="OK">
    </form>
<?php
} else {
    // Si 'numeroTexto' está definido en la URL, se ejecuta este bloque
    $numeroTexto = $_GET['numeroTexto']; // Obtiene el valor de 'numeroTexto' desde la URL
    $viejo = $_GET['viejo']; // Obtiene el valor de 'viejo' desde la URL
    $nuevo = $_GET['nuevo']; // Obtiene el valor de 'nuevo' desde la URL

    $numero = explode(" ", $numeroTexto); // Convierte la cadena en un arreglo separado por espacios

    // Recorre el arreglo y reemplaza 'viejo' por 'nuevo' en la salida
    foreach ($numero as $n) {
        if ($n == $viejo) {
            echo "<span style=\"color: green; font-weight: bold;\">$nuevo</span> ";
        } else {
            echo  "$n ";
        }
    }
}
?>