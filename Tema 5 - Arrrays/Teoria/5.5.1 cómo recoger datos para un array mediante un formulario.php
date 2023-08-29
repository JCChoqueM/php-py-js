<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 5.5.1 </title>
</head>

<body>
    <h2>Ejemplo 5.5.1</h2>
    <h3 style="width:65% ">Imagina que quieres pedir diez números por teclado y quieres guardar esos números en un array. Se puede pedir un número mediante un formulario, a continuación el siguiente, luego el siguiente, etc. pero ¿cómo enviarlos? Hay un truco muy sencillo. Se pueden ir concatenando valores en una cadena de caracteres y el resultado de esa concatenación se puede reenviar una y otra vez en un formulario como campo oculto. Por último, se puede utilizar la funcion explode() para convertir la cadena de caracteres en un array.
        Es importante señalar que los valores que se van concatencando deben tener algún tipo de separación dentro de la cadena, por ejemplo un espacio en blanco.
        A continuación se muestra un ejemplo completo:</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>Ejemplo 5.3.1 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
    $cajonDeSastre = [30, -7, "Me gusta el queso", 56, "¡eh!", 237];
    foreach ($cajonDeSastre as $cosa) {
        echo "$cosa &lt;br>";
    }
    echo "&lt;hr>";
    echo "&lt;br>";
    var_dump($cajonDeSastre);
    echo "&lt;br>";
    ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado:</h4>
    <!-- SECTION inicia codigo -->
    <?php
    $n = $_GET['n'];
    $contadorNumeros = $_GET['contadorNumeros'];
    $numeroTexto = $_GET['numeroTexto'];
    if (!isset($n)) {
        $contadorNumeros = 0;
        $numeroTexto = "";
    }
    // Muestra los números introducidos
    if ($contadorNumeros == 6) {
        $numeroTexto = $numeroTexto . " " . $n; // añade el último número leído
        $numeroTexto = substr($numeroTexto, 2); // quita los dos primeros
        // espacios de la cadena
        $numero = explode(" ", $numeroTexto);
        echo "Los números introducidos son: ";
        foreach ($numero as $n) {
            echo $n, " ";
        }
    }
    // Pide número y añade el actual a la cadena
    if (($contadorNumeros < 6) || (!isset($n))) {
    ?>
        <form action="#" method="get">
            Introduzca un número:
            <input type="number" name="n" autofocus>
            <input type="hidden" name="contadorNumeros" value="<?= ++$contadorNumeros ?>">
            <input type="hidden" name="numeroTexto" value="<?= $numeroTexto . " " . $n ?>">
            <input type="submit" value="OK">
        </form>
    <?php
    }
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>