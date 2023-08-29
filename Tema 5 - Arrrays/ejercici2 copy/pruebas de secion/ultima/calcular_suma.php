<!DOCTYPE html>
<html>

<head>
    <title>Resultado de la Suma</title>
</head>

<body>
    <h2>Resultado de la Suma</h2>

    <?php
    if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["numeros"])) {
        $numeros = $_GET["numeros"]; // Obtener la cadena de números desde la URL
        $numeros = explode(",", $numeros); // Convertir la cadena en un arreglo usando comas como separadores
        $numeros = array_filter($numeros); // Eliminar elementos vacíos
        $numeros = array_map('intval', $numeros); // Convertir los elementos a números enteros
        $suma = array_sum($numeros); // Calcular la suma

        echo "<p>Números ingresados: " . implode(", ", $numeros) . "</p>"; // Mostrar los números ingresados
        echo "<p>Suma de los números: " . $suma . "</p>"; // Mostrar la suma
    }
    ?>

</body>

</html>