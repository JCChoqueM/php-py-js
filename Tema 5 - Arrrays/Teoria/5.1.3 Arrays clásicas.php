<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>"jemplo 5.1.3 </title>
</head>

<body>
    <h2>"jemplo 5.1.3</h2>
    <h3 style="width:65% ">En este otro ejemplo, asignamos valores aleatorios a los elementos de un array.</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>"jemplo 5.1.3 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
        echo "&lt;b> Notas:&lt;/b>&lt;br>";
        for ($i = 0; $i < 10; $i++) {
        $n[$i] = rand(0, 10);
        }
        foreach ($n as $elemento) {
        echo $elemento, "&lt;br>";
        }
        var_dump($temp);
    ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado:</h4>
    <!-- SECTION inicia codigo -->
    <?php
    echo "<b> Notas:</b><br>";
    for ($i = 0; $i < 10; $i++) {
        $n[$i] = rand(0, 10);
    }
    foreach ($n as $elemento) {
        echo $elemento, "<br>";
    }
    var_dump($n);
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>