<!--Realiza un conversor de pesetas a euros. La cantidad en pesetas que se quiere convertir se deberá
introducir por teclado-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesetas a Euros</title>
</head>

<body>
    <?php
    $peseta = 166;
    $a = $_GET['a'];
    $euro = $a / $peseta;
    echo "Tus pesetas en euros es:  " . $euro;
    ?>
</body>

</html>