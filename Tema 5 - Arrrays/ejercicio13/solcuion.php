<!DOCTYPE html>
<html>

<head>
    <title>Traductor Español-Inglés</title>
    <style>
        .input-resaltado {
            color: blue;
        }

        .array-resaltado {
            color: green;
        }

        .info-resaltada {
            color: purple;
        }

        .posicion-resaltada {
            color: orange;
        }

        .verificacion-resaltada {
            color: red;
        }

        .resultado-resaltado {
            color: teal;
        }
    </style>
</head>

<body>
    <h2>Traductor Español-Inglés</h2>

    <?php
    // Mini-diccionario español-inglés
    $diccionario = array(
        "casa" => "house",
        "perro" => "dog",
        "gato" => "cat",
        "sol" => "sun",
        "agua" => "water"
    );

    // Contadores de respuestas válidas y erróneas
    $respuestas_validas = 0;
    $respuestas_erroneas = 0;

    // Función para comprobar las respuestas
    function comprobarRespuestas($respuesta, $traduccion, &$validas, &$erroneas)
    {
        if (isset($traduccion[$respuesta])) {
            echo "<p class='input-resaltado'>$respuesta</p> es correcto. La traducción es <span class='verificacion-resaltada'>" . $traduccion[$respuesta] . "</span>.<br>";
            $validas++;
        } else {
            echo "<p class='input-resaltado'>$respuesta</p> es incorrecto. La traducción correcta es <span class='verificacion-resaltada'>{$traduccion[$respuesta]}</span>.<br>";
            $erroneas++;
        }
    }

    // Selección aleatoria de 5 palabras
    $palabras_aleatorias = array_rand($diccionario, 5);

    // Formulario para ingresar las traducciones
    echo "<form method='post'>";
    foreach ($palabras_aleatorias as $palabra) {
        echo "<label>Traduce <span class='info-resaltada'>$palabra</span>: <input type='text' name='traducciones[$palabra]'></label><br>";
    }
    echo "<input type='submit' value='Comprobar'></form>";

    // Procesar respuestas cuando se envía el formulario
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["traducciones"])) {
            foreach ($_POST["traducciones"] as $palabra => $respuesta) {
                comprobarRespuestas($palabra, $diccionario, $respuestas_validas, $respuestas_erroneas);
            }
        }
        // Mostrar resultados finales
        echo "<br><p>Respuestas válidas: <span class='resultado-resaltado'>$respuestas_validas</span></p>";
        echo "<p>Respuestas erróneas: <span class='resultado-resaltado'>$respuestas_erroneas</span></p>";
    }
    ?>

</body>

</html>