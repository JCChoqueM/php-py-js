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
  $cuadrado = 0;
  $cubo = 0;
  $contador = 0;
  $mensaje = "";
  while ($contador < 5) {
    $cuadrado = pow($num1, 2);
    $cubo = pow($num1, 3);
    $mensaje .= "Nº$num1. Cuadrado= $cuadrado. <br>Cubo= $cubo<br><br>";
    $contador += 1;
    $num1 += 1;
  }
  /* !SECTION fin programa */
} else {
  $mensaje = "Ingrese datos en el formulario";
}
echo $mensaje;
