<!--Escribe un programa que sume, reste, multiplique y divida dos números introducidos por teclado.-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operaciones Basicas</title>
</head>

<body>
    <?php
    $a = $_GET['a'];
    $b = $_GET['b'];
    echo "la suma de " . $a . "  mas  " . $b . "  es :  " . $a + $b . "<br><br>";
    echo "la resta de " . $a . "  menos  " . $b . "  es :  " . $a - $b . "<br><br>";
    echo "la multiplicacion de  " . $a . "  por  " . $b . "  es :  " . $a * $b . "<br><br>";
    echo "la division de  " . $a . "  entre  " . $b . "  es :  " . $a / $b . "<br><br>";

    ?>
</body>

</html>