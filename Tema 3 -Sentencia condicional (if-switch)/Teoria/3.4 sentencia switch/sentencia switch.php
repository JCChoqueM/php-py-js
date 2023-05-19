<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sentencia switch</title>
</head>

<body>
    <?php
    $posicion = "abajo";
    switch ("$posicion") {
        case "arriba":  //bloque 1
            echo "La variable contiene";
            echo " el valor arriba";
            break;
        case "abajo": // Bloque 2
            echo "La variable contiene ";
            echo " el valor de abajo";
            break;
        default: //Bloque 3
            echo "la variable contiene otro valor";
            echo " distintio de arriba y abajo";
    }



    ?>
</body>

</html>