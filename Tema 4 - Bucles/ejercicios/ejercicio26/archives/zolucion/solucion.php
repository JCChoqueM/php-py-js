<?php
$num1 = $_POST["num1"];
$num2 = $_POST["num2"];
if (
  isset($num1) &&
  trim($num1) !== "" &&
  is_numeric($num1)
  /*     filter_var($num1, FILTER_VALIDATE_INT) !== false */
) {
  /* SECTION inicio programa */
  $num1 = intval($num1);
  $num2 = intval($num2);
  $mensaje = "";
  if ($num2 >= 0 && $num2 < 10) {
    $volteado = 0;
    $posicion = 0;
    $original = $num1;
    $num1 = abs($num1);
    $verificar = 0;
    while ($num1 > 0) {
      $volteado = $volteado * 10 + ($num1 % 10);
      $num1 = intval($num1 / 10);
    };
    $mensaje .= "El digito $num2 del numero $original se encuentra en las posiciones:";
    while ($volteado > 0) {
      if ($volteado % 10 == $num2) {
        $posicion += 1;
        $verificar += 1;
        $mensaje .= "($posicion) ";
      } else {
        $posicion += 1;
      }
      $volteado = intval($volteado / 10);
    }
    if ($verificar == 0) {
      $mensaje = "No se encontro el digito $num2 en el numero $original";
    }
  } else {
    $mensaje = "El digitio debe ser de 0 a 9";
  }

  /* !SECTION fin programa */
} else {
  $mensaje = "Ingrese datos en el formulario";
}
echo "$mensaje";
