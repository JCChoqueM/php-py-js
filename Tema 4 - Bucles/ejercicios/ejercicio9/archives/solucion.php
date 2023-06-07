<?php
$num1 = ($_POST["num1"]);

if (
  isset($num1) &&
  is_numeric($num1) &&
  filter_var($num1, FILTER_VALIDATE_INT) !== false
) {
  /* SECTION inicio programa */
  $nuevoNumero = "$num1";
  if ($num1 < 0) {
    $num1 = abs($num1);
  }
  $contador = 0;
  while ($num1 > 0) {
    $num1 = intval($num1 / 10);
    $contador += 1;
  }
  if ($contador == 0) {
    $mensaje = "El numero $nuevoNumero tiene 1 digito";
  } else {
    $mensaje = "El numero $nuevoNumero tiene $contador" . ($contador >= 2 ? " digitos" : " digito");
  }
  /* !SECTION fin programa */
} else {
  $mensaje = "Ingrese datos en el formulario";
}
echo $mensaje;
