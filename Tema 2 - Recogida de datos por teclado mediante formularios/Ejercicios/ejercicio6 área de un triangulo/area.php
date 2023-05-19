<!--Escribe un programa que calcule el área de un triángulo. -->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Area de un triangulo</title>
</head>

<body>
    <?php
    $b = $_POST['b'];
    $h = $_POST['h'];
    $area = ($b * $h) / 2;
    echo "El área del triangulo es:   " . $area . "  metros²";

    ?>
</body>

</html>