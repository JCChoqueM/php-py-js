<!--Escribe un programa que calcule el área de un rectángulo.-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Área de un rectangulo </title>
</head>

<body>
    <?php
    $b = $_GET['b'];
    $h = $_GET['h'];
    $área = $b * $h;
    echo "El área del rectangulo es:  " . $área . "metros²";


    ?>
</body>

</html>