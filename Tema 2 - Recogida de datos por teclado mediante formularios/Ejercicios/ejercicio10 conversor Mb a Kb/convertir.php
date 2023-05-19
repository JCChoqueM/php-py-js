<!--realizar un conversor de Mb a Kb.   1Mb=1024 Kb-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mb a Kb</title>
</head>

<body>
    <?php
    echo "<h3>convertir de Mb a kb</h3>";
    $mega = $_POST['a'];
    $m = 1024;
    echo $mega . "   Mb   son:   " . $mega * $m . "  Kb";

    ?>
</body>

</html>