<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 5.1.4 </title>
</head>

<body>
    <h2>Ejemplo 5.1.4</h2>
    <h3 style="width:65% ">A partir de PHP 5.4 se puede utilizar la sintaxis abreviada(utilizando corchetes [ ]) para definir un array</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>Ejemplo 5.1.4 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
        $color = ["verde", 23, "rojo", "azul", "blanco", "gris"];
        echo "Mañana me pongo una camiseta de color ", $color[rand(0, 5)], ".";
        echo "&lt;br&gt;&lt;br&gt;";
        var_dump($color);
    ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado:</h4>
    <!-- SECTION inicia codigo -->
    <?php
    $color = ["verde", 23, "rojo", "azul", "blanco", "gris"];
    echo "Mañana me pongo una camiseta de color ", $color[rand(0, 5)], ".";
    echo "<br> <br>";
    var_dump($color);
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>