<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>suma de 2 numeros</title>
</head>

<body>
    <?php
    $a = $_GET['a'];
    $b = $_GET['b'];
    echo "La suma de $a mas $b es:  " . $a + $b;
    ?>
</body>

</html>