<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivina php</title>
</head>

<body>
    <?php
    $oportunidades = $_POST['oportunidades'];
    $numeroIntroducido = $_POST['numeroIntroducido'];

    $numeroSecreto = 24;

    if ($numeroIntroducido == $numeroSecreto) {
        echo "En hora buena, has acertado el número.";
    } else {
        if ($oportunidades == 0) {
            echo "Lo siento, has agotado todas tus oportunidades. Has perdido";
        } else {
            if ($numeroIntroducido != 555) {
                if ($numeroSecreto > $numeroIntroducido) {
                    echo "El número que estoy pensando es mayor que el número que has introducido. <br>";
                } else {
                    echo "El número que estoy pensando es menor que el número que has introducido. <br>";
                }
            }
    ?>
            Te quedan <?= $oportunidades-- ?> oportunidades para adivinar el número. <br>
            Introduce un número del 0 al 100
            <form action="adivina.php" method="post">
                <input type="text" name="numeroIntroducido">
                <input type="hidden" name="oportunidades" value="<?= $oportunidades ?>">
                <input type="submit" value="Continuar">
            </form>
    <?php
        }
    }
    ?>
</body>

</html>