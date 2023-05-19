<!--Escribe un programa que calcule el volumen de un cono mediante la formula V= 1(pi r^2 h)/3.-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Volumen de un cono</title>
</head>

<body>
    <?php
    echo "<h2>Volumen de un cono <br></h2>";
    $pi = 3.1416;
    $r = $_POST['r'];
    $h = $_POST['h'];
    echo "El volumen del cono es de " . ($pi * (pow($r, 2)) * $h) / 3;

    ?>
</body>

</html>