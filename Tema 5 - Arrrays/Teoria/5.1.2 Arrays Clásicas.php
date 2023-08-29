<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 5.1.2 </title>
</head>

<body>
    <h2>Ejemplo 5.1.2</h2>
    <h3 style="width:65% ">Los valores de un array se pueden asignar directamente en una línea. El índice comienza en 0</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>Ejemplo 5.1.2 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
        $temp = array(16, 15, 17, 15, 16);
        echo "La temperatura en Málaga el cuarto día del año fue de ";
        echo $temp[2], "ºC";
        echo "&lt;br&gt;&lt;br&gt;";
        var_dump($temp);
        ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado:</h4>
    <!-- SECTION inicia codigo -->
    <?php
    $temp = array(16, 15, 17, 15, 16);
    echo "La temperatura en Málaga el cuarto día del año fue de ";
    echo $temp[2], "ºC";
    echo "<br> <br>";
    var_dump($temp);
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>