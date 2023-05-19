<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Operadores logicos</title>
</head>

<body>
    <?php
    $a = 8;
    $b = 8;
    $c = 9;
    echo ($a == $b) && ($c > $b), "<br>";
    echo ($a == $b) || ($b == $c), "<br>";
    echo (!(!($b <= $b))), "<br>";
    ?>
</body>

</html>