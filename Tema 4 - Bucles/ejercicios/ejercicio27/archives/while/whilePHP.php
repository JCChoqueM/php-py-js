<?php
$num1 = $_POST["num1"];
if (
    isset($num1) &&
    trim($num1) !== "" &&
    is_numeric($num1)
    /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
    /* SECTION inicio programa */
    $num1 = intval($num1);
    $mensaje = "";
    $contador = 1;
    $contadormul = 0;
    $suma = 0;
    if ($num1 >= 1) {
        $mensaje .= "En el rango de 1 a $num1.<br>";
        $mensaje .= "Los multiplos de 3 son:<br> ";
        while ($contador <= $num1) {
            if ($contador % 3 == 0) {
                $mensaje .= "($contador)";
                $contadormul++;
                $suma += $contador;
            }
            $contador++;
        }
        if ($contadormul == 0) {
            $mensaje .= " no hay multiplos<br> La cantidad de multiplos es (0)";
        } else {
            $mensaje .= "<br> la cantidad de multiplos es:<br> ($contadormul)";
        }
        $mensaje .= "<br>la suma de los multiplos es:<br> ($suma)";
    } else {
        $mensaje = "El numero debe ser mayor o igual a 1";
    }

    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje ";
