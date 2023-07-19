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
  $num1 = abs($num1);
  $signo;
  $digito;
  if ($original < 0) {
    $signo = true;
  } else {
    $signo = false;
  }
  if ($num1 != 0) {
    $mensaje .= "El numero volteado de <br> $original es: <br>";
    while ($num1 > 0) {
      $digito = $num1 % 10;
      $num1 = intval($num1 / 10);
      if ($signo) {
        $mensaje .= "- ";
        $signo = false;
      }
      $mensaje .= "$digito ";
    }
  } else {
    $mensaje = "0";
  }
  /* !SECTION fin programa */
} else {
  $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje ";
