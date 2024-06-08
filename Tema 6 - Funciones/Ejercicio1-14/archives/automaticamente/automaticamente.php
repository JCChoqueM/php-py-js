<?php
// Verificar si se recibieron datos POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Obtener los datos enviados desde JavaScript
  $datos = json_decode(file_get_contents("php://input"), true);

  // Imprimir cada dato por separado usando un bucle foreach
  echo "Datos recopilados:<br>";
  foreach ($datos as $clave => $valor) {
    if (is_array($valor)) {
      echo "Clave: " . $clave . "<br>";
      foreach ($valor as $elemento) {
        echo "Valor: " . $elemento . "<br>";
      }
    } else {
      echo "Clave: " . $clave . ", Valor: " . $valor . "<br>";
    }
  }

  // Simular algún procesamiento o cálculo con los datos recibidos
  $resultado = "----------------------------------------<br>";
  var_dump($datos);
  echo "----------------------------------------";
  print_r($datos);
  echo $datos["numero2"]["num2"];
  // Imprimir el resultado de vuelta al cliente

} else {
  // Si no se recibieron datos POST, retornar un mensaje de error
  echo "Error: No se recibieron datos POST";
}
