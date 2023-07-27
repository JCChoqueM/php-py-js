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
  $original = $num1;
  $factorial = 1;
  if ($num1 >= 0) {
    while ($num1 > 1) {
      $factorial *= $num1;
      $num1--;
    }
    $mensaje = "La factorial de $original! es: <br>$factorial";
  } else {
    $mensaje = "La factorial de un numero solo acepta numeros enteros positivos.";
  }

  /* !SECTION fin programa */
} else {
  $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje ";
