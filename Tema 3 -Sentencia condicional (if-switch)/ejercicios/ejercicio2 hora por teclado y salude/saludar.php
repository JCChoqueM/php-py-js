<!--Realiza  un programa que pida una hora por teclado y que muestre luego buenos dias, buenas
tardes o buenas noches según la hora. Se utilizaran  los tramos de 6 a 12, de 13 a 20 y de 21 a 5
respectivamente. Sólo se tiene en cuenta las horsa. los minutos no se deben introducir por teclado.-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saludo</title>
</head>
<body>
    <?php
$a =  $_POST['a'];
if (($a<24)&&($a>=0)){
    if(($a<=23)&&($a>=21)||($a>=0)&&($a<=5)){
        echo " Buenas noches";
    }
    elseif (($a>=6)&&($a<=12)){
        echo " Buenos dias";
    }
    elseif (($a>=13)&&($a<=20)){
        echo " Buenas tardes";
    }
}
else {
    echo "No es una hora correcta";
}

    ?>
</body>
</html>