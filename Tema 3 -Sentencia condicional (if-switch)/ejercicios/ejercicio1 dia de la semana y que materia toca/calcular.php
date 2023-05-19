<!--Escribe un programa que pida por teclado un día de la semana y que diga qué asignatura toca a
primera hora ese día-->
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Día de la semana y que materia toca</title>
</head>

<body>
    <?php
    $dia = $_POST['dia'];

    $posicion = $dia;
    if(($posicion=="Lunes")||($posicion=="lunes")||($posicion=="LUNES")){
        echo "Los lunes a primera hora tienes: Informatica I";
    }
        elseif(($posicion=="Martes")||($posicion=="martes")||($posicion=="MARTES")){
echo "Los martes a primera hora tienes: Algebra lineal ";
}
        elseif(($posicion=="Miercoles")||($posicion=="miercoles")||($posicion=="MIERCOLES")){
echo "Los miercoles a primera hora tienes: Contabilidad Basica ";
}
        elseif(($posicion=="Jueves")||($posicion=="jueves")||($posicion=="JUEVES")){
echo "Los jueves a primera hora tienes:Lenguajes de programación";
}
        elseif(($posicion=="Viernes")||($posicion=="viernes")||($posicion=="VIERNES")){
echo "Los viernes a primera hora tienes: Optativa I ";
}
        elseif(($posicion=="Sabado")||($posicion=="sabado")||($posicion=="SABADO")){
echo "Los sabados a primera hora tienes: Investigación operativa II";
}
        elseif(($posicion=="Domingo")||($posicion=="domingo")||($posicion=="DOMINGO")){
echo "Los domingos son tus dias de descanso ¡Disfrutalo!!!";
}
else {
        echo "Vuelve a intentarlo";
}
    /*
    switch ("$posicion") {
        //case "lunes":  //bloque 1
           // echo " Lunes a primera hora tienes informatica I";
           // break;
        //case "martes": // Bloque 2
           // echo "Martes a primera hora tienes Algebra lineal ";
           // break;
        case "miercoles": // Bloque 2
            echo "Miercoles a primera hora tienes Contabilidad basica ";
            break;
        case "jueves": // Bloque 2
            echo "Jueves a primera hora tienes Lenguajes de programación ";
            break;
        case "viernes": // Bloque 2
            echo "viernes a primera hora tienes Optativa I ";
            break;
        case "sabado": // Bloque 2
            echo "Sabadi a primera hora tienes investigación operativa II ";
            break;
        case "Domingo": // Bloque 2
            echo "Los domingos es tu dia libre !Disfrutalo!!";
            break;
        default: //Bloque 3
            echo "introduzca un dia de la semana";
    }
*/
    ?>
</body>

</html>