<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prueba tu vocabulario en inglés</title>
</head>

<body>

  <?php
  $diccionario = array(
    "ordenador" => "computer",
    "gato" => "cat",
    "rojo" => "red",
    "árbol" => "tree",
    "pingüino" => "penguin",
    "sol" => "sun",
    "agua" => "water",
    "viento" => "wind",
    "siesta" => "nap",
    "arriba" => "up",
    "ratón" => "mouse",
    "estadio" => "arena",
    "calumnia" => "aspersion",
    "aguacate" => "avocado",
    "cuerpo" => "body",
    "concurso" => "contest",
    "cena" => "dinner",
    "salida" => "exit",
    "lenteja" => "lentil",
    "cacerola" => "pan",
    "pastel" => "pie",
    "membrillo" => "quince"
  );

  if (!isset($_GET['espanol'])) {
    echo "Por favor, introduzca la traducción al inglés de las siguientes palabras.<br>";

    // Extrae las palabras españolas
    $palabrasEspanolas = array_keys($diccionario);

    // Elige 5 palabras en español sin que se repita ninguna
    $espanol = array_rand($palabrasEspanolas, 5);

    echo '<form action="pagina.php" method="get">';
    echo '<input type="hidden" name="ejercicio" value="12">';
    for ($i = 0; $i < 5; $i++) {
      $palabra = $palabrasEspanolas[$espanol[$i]];
      echo $palabra . " ";
      echo '<input type="hidden" name="espanol[]" value="' . $palabra . '">';
      echo '<input type="text" name="ingles[]" required><br>';
    }
    echo '<input type="submit" value="Aceptar">';
    echo '</form>';
  } else {
    $espanol = $_GET['espanol'];
    $ingles = $_GET['ingles'];

    for ($i = 0; $i < 5; $i++) {
      if ($diccionario[$espanol[$i]] == $ingles[$i]) {
        echo '<span style="color: green;">' . $espanol[$i] . ": " . $ingles[$i];
        echo " - correcto</span><br>";
      } else {
        echo '<span style="color: red;">' . $espanol[$i] . ": " . $ingles[$i];
        echo " - incorrecto</span>, la respuesta correcta es <b>" . $diccionario[$espanol[$i]] . "</b><br>";
      }
    }
  }
  ?>

</body>

</html>