<?php
$num1 = ((($_POST["num1"])));

if (
  isset($num1) &&
  trim($num1) !== "" &&
  is_numeric($num1)
  /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
  /* SECTION inicio programa */
  $nuevoNumero = "$num1";
  if ($num1 < 0) {
    $num1 = abs($num1);
  }
  $contador = 0;
  while ($num1 > 0) {
    $num1 = floor($num1 / 10);
    $contador++;
  }
  if ($contador == 0) {
    $mensaje = "El numero $nuevoNumero tiene 1 Digito";
  } elseif ($contador >= 2) {
    $mensaje = "El numero $nuevoNumero tiene $contador Digitos";
  } else {
    $mensaje = "El numero $nuevoNumero tiene 1 digito";
  }
  /* !SECTION fin programa */
} else {
  $mensaje = "Ingrese datos en el formulario";
}
echo $mensaje;
