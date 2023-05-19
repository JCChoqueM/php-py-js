<!--Realiza un conversor de euros a pesetas. Ahora la cantidad de euros que se quiere convertir se
deberá introducir por teclado.-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Euros a Pesetas</title>
</head>

<body>
    <?php
    $euro = $_GET['a'];
    $pesetas = $euro * 166;
    echo "La cantidad de euros en pesetas son: " . $pesetas;
    ?>
</body>

</html>