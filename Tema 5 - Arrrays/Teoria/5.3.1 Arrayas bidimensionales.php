<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 5.3.1 </title>
</head>

<body>
    <h2>Ejemplo 5.3.1</h2>
    <h3 style="width:65% ">Un array bidimencional utiliza dos índices para localizar cada elemento. Podemos ver este tipo de datos como un array que, a su vez, contiene otros arrays. En el siguiente ejemplo se define un arrays con 4 elementos que, a su vez, son un array asociativo cada uno de ellos.</h3>
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
    $persona = array(
        array("nombre" => "Rosa", "estatura" => 168, "sexo" => "F"),
        array("nombre" => "Ignacio", "estatura" => 175, "sexo" => "M"),
        array("nombre" => "Daniel", "estatura" => 172, "sexo" => "M"),
        array("nombre" => "Rubén", "estatura" => 182, "sexo" => "M")
    );
    echo "&lt;b>DATOS SOBRE EL PERSONAL&lt;b>&lt;br>&lt;hr>";
    $numPersonas = count($persona); //count permite saber el número de elementos de un array
    for ($i = 0; $i < $numPersonas; $i++) {
        echo "Nombre: &lt;b>", $persona[$i]["nombre"], "&lt;/b>&lt;br>";
        echo "Estatura: &lt;b>", $persona[$i]["estatura"], " cm&lt;/b>&lt;br>";
        echo "Sexo: &lt;b>", $persona[$i]["sexo"], "&lt;/b>&lt;br>";
    }
    echo "&lt;br>";
    var_dump($numPersonas);
    echo "&lt;br>";
    var_dump($persona[0]);
    echo "&lt;br>";
    var_dump($persona[1]);
    echo "&lt;br>";
    var_dump($persona[2]);
    echo "&lt;br>";
    var_dump($persona[3]);
    echo "&lt;br>&lt;br>";
    var_dump($persona);
    ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado:</h4>
    <!-- SECTION inicia codigo -->
    <?php
    $persona = array(
        array("nombre" => "Rosa", "estatura" => 168, "sexo" => "F"),
        array("nombre" => "Ignacio", "estatura" => 175, "sexo" => "M"),
        array("nombre" => "Daniel", "estatura" => 172, "sexo" => "M"),
        array("nombre" => "Rubén", "estatura" => 182, "sexo" => "M")
    );
    echo "<b>DATOS SOBRE EL PERSONAL<b><br><hr>";
    $numPersonas = count($persona); 
    for ($i = 0; $i < $numPersonas; $i++) {
        echo "Nombre: ", $persona[$i]["nombre"], "<br>";
        echo "Estatura: ", $persona[$i]["estatura"], " cm<br>";
        echo "Sexo: ", $persona[$i]["sexo"], "<br><br>";
    }
    echo "<hr>";
    echo "<br>";
    var_dump($numPersonas);
    echo "<br>";
    var_dump($persona[0]);
    echo "<br>";
    var_dump($persona[1]);
    echo "<br>";
    var_dump($persona[2]);
    echo "<br>";
    var_dump($persona[3]);
    echo "<br><br>";
    echo "<hr>";
    var_dump($persona);
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>