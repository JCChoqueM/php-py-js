<!--Escribe un programa que calcule el total de una factura a partir de la base imponible.-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factura al 10%</title>
</head>

<body>
    <?php
    $f = $_POST['f'];
    $factura = $f * 0.10;
    echo "El precio de compra es:  " . $f . "<br> Su factura total es de:" . $f + $factura;

    ?>
</body>

</html>