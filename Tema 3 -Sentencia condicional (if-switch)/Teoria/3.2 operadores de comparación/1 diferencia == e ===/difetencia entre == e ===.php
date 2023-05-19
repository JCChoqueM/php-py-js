<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Diferencia entre == e ===</title>
</head>

<body>
    <h1>Diferencia entre = = e = = =</h1>
    <?php
    $a = 5;
    $b = "5";
    echo ($a == 5) ? "verdadero" : "falso", "<br>";
    echo ($a === 5) ? "verdadero" : "falso", "<br>";
    echo ($b == 5) ? "verdadero" : "falso", "<br>";
    echo ($b === 5) ? "verdadero" : "falso", "<br>";
    echo '$a = 5;' . '<br>';
    echo ' $b = "5";' . '<br>';
    echo 'echo ($a == 5) ? "verdadero" : "falso", "<br>";';
    echo 'echo ($a === 5) ? "verdadero" : "falso", "<br>";';
    echo 'echo ($b == 5) ? "verdadero" : "falso", "<br>";';
    echo 'echo ($b === 5) ? "verdadero" : "falso", "<br>";';
    ?>
</body>

</html>