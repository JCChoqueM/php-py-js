<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>"jemplo 5.2.3 </title>
</head>

<body>
    <h2>"jemplo 5.2.3</h2>
    <h3 style="width:65% ">Si el lector es suficiente perspicaz ya se habrá dado cuenta de que $_GET y $_POST son arrays asociativos. Con los arrays asociativos se puede usar también la sintaxis abreviada que emplea corchetes [ ].</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>"jemplo 5.2.3 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
        $estatura = [
            "Rosa" => 168,
            "Ignacio" => 175,
            "Daniel" => 172,
            "Rubén" => 182,
        ];
        echo "La estatura de Rosa es ", $estatura["Rosa"], " cm";
        echo "&lt;br>&lt;br>";
        var_dump($estatura)
    ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado:</h4>
    <!-- SECTION inicia codigo -->
    <?php
    $estatura = [
        "Rosa" => 168,
        "Ignacio" => 175,
        "Daniel" => 172,
        "Rubén" => 182,
    ];
    echo "La estatura de Rosa es ", $estatura["Rosa"], " cm";
    echo "<br><br>";
    var_dump($estatura)
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>