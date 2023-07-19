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
    $suma = 0;
    $contador = 0;
    $i = $num1 + 1;
    if ($num1 >= 0) {
        while ($contador < 100) {
            $suma = $suma + $i;
            $i += 1;
            $contador++;
        }
        $mensaje = "La suma de los 100 numeros siguientes a $num1 es:<br>$suma";
    }
    /* !SECTION fin programa */
} else {
    $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje ";
