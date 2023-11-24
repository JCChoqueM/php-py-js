<?php
// Se han introducido los números y además las posiciones inicial y final
$numero = [3, 4, 5, 6, 7];
$inicial = 3;
$final = 4;

// Muestra el array original

// Índice
echo "Array original:<br>";
echo "<table><tr>";
for ($i = 0; $i < 5; $i++) {
    echo "<td>$i</td>";
}
echo "</tr>";

// Contenido
for ($i = 0; $i < 5; $i++) {
    echo "<td>" . $numero[$i] . "</td>";
}
echo "</tr></table>";

// Rotación

// Primer tramo
$auxiliar = $numero[4];
for ($i = 4; $i > $final; $i--) {
    $numero[$i] = $numero[$i - 1];
}
$numero[$final] = $numero[$inicial];

// Segundo tramo
for ($i = $inicial; $i > 0; $i--) {
    $numero[$i] = $numero[$i - 1];
}
$numero[0] = $auxiliar;


// Muestra el array resultante

// Índice
echo "<br><br>Inicial: $inicial Final: $final<br>";
echo "<br>Array resultante:<br>";
echo "<table><tr>";
for ($i = 0; $i < 5; $i++) {
    echo "<td>$i</td>";
}
echo "</tr>";

// Contenido
for ($i = 0; $i < 5; $i++) {
    echo "<td>" . $numero[$i] . "</td>";
}
echo "</tr></table>";
