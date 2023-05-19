<!--Escribe un programa en que dado un número del 1 a 7 escriba el correspondiente nombre del día 
de la semana-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Día de la semana</title>
</head>
<body>
    <?php
$diad=$_POST['d'];
//if($diad>0 && $diad<8){
    switch ("$diad") {
        case "1":  //bloque 1
        echo "Es el día lunes";
            break;
         case "2": // Bloque 2
            echo "Es el día martes";
            break;
        case "3": // Bloque 2
            echo "Es el día miercoles";
            break;
        case "4": // Bloque 2
            echo "Es el día jueves";
            break;
        case "5": // Bloque 2
            echo "Es el día viernes";
            break;
        case "6": // Bloque 2
            echo "Es el día sabado  ";
            break;
        case "7": // Bloque 2
            echo "Es el día domingo";
            break;
       default: //Bloque 3
        echo "No es un numero permitido a evaluar";
    }
//}
/*else {
    echo "No es un numero permitido";
}*/
    ?>
</body>
</html>
<!--
    if($diad==1){
        echo "Es el dia lunes";
    }
    elseif($diad==2){
        echo "Es el dia martes ";
    }
    elseif($diad==3){
        echo "Es el dia miercoles ";
    }
    elseif($diad==4){
        echo "Es el dia jueves ";
    }
    elseif($diad==5){
        echo "Es el dia viernes ";
    }
    elseif($diad==6){
        echo "Es el dia sabado ";
    }
    elseif($diad==7){
        echo "Es el dia domingo ";
    }
-->
