<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>"jemplo 5.2.1 </title>
</head>

<body>
    <h2>"jemplo 5.2.1</h2>
    <h3 style="width:65% ">En un array asociativo se pueden utilizar indices que no son numéricos, a modo de claves. Veamos un ejemplo de un array asociativo que almacena alturas (en centímetros) y que como índice o clave utiliza nombres.</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>"jemplo 5.2.1 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
        $estatura = array("rosa" => 168, "Ignacio" => 175, "Daniel" => 172, "Rubén" => 182);
        echo "La estatura de Daniel es ", $estatura["Daniel"], "cm&lt;br>";
        echo "&lt;br>";
        var_dump($estatura)
    ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado:</h4>
    <!-- SECTION inicia codigo -->
    <?php
    $estatura = array("rosa" => 168, "Ignacio" => 175, "Daniel" => 172, "Rubén" => 182);
    echo "La estatura de Daniel es ", $estatura["Daniel"], "cm<br>";
    echo "<br>";
    var_dump($estatura)
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>