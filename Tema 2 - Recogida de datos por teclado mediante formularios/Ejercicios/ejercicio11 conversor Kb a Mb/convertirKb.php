<!--Realiza un conversor de Kb a Mb.  1Kb= 0.0009765625 Mb-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kb a Mb</title>
</head>

<body>
    <?php
    echo "<h3>convertir de Kb a Mb</h3>";
    $a = $_POST['K'];
    echo $a . "  Kb  son:  " . $a / 1024 . "  Mb";
    ?>
</body>

</html>