<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>"jemplo 5.2.2 </title>
</head>

<body>
    <h2>"jemplo 5.2.2</h2>
    <h3 style="width:65% ">En un array asociativo se pueden utilizar indices que no son numéricos, a modo de claves. Veamos un ejemplo de un array asociativo que almacena alturas (en centímetros) y que como índice o clave utiliza nombres.</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>"jemplo 5.2.2 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
        $estatura["Rosa"] = 168;
        $estatura["Ignacio"] = 175;
        $estatura["Daniel"] = 172;
        $estatura["Rubén"] = 182;
        echo "La estatura de Ignacio es ", $estatura["Ignacio"]," cm";
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
    $estatura["Rosa"] = 168;
    $estatura["Ignacio"] = 175;
    $estatura["Daniel"] = 172;
    $estatura["Rubén"] = 182;
    echo "La estatura de Ignacio es ", $estatura["Ignacio"], " cm";
    echo "<br><br>";
    var_dump($estatura)
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>