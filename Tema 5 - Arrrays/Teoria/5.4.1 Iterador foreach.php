<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 5.4.1 </title>
</head>

<body>
    <h2>Ejemplo 5.4.1</h2>
    <h3 style="width:65% ">El iterador foreach se utiliza para recorrer todos los elementos de una array sin que tengamos que preocuparnos por los índices ni por el tamaño del array.
        Es común cometer errores al utilizar arrays por no establecer bien el valor inicial o el valor final en el bucle que la recorre, o por no determinar bien el tamaño. Con foreach nos podemos despreocupar de todo eso, simplemente recorremos todo el array de principio a fin. Veamos un ejemplo</h3>
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
    $cajonDeSastre = [30, -7, "Me gusta el queso", 56, "¡eh!", 237];
    foreach ($cajonDeSastre as $cosa) {
        echo "$cosa<br>";
    }
    echo "<hr>";
    var_dump($cajonDeSastre);
    echo "<br>";
    echo "<hr>";
    echo "<br>";
    var_dump($cajonDeSastre[0]);
    echo "<br>";
    var_dump($cajonDeSastre[1]);
    echo "<br>";
    var_dump($cajonDeSastre[2]);
    echo "<br>";
    var_dump($cajonDeSastre[3]);
    echo "<br>";
    var_dump($cajonDeSastre[4]);
    echo "<br>";
    var_dump($cajonDeSastre[5]);
    echo "<br>";
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>