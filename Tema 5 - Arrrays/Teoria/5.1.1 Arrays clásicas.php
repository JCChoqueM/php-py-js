<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 5.1.1 </title>
</head>

<body>
    <h2>Ejemplo 5.1.1</h2>
    <h3 style="width:65% ">Un array es un tipo de dato capaz de almacenar múltiples valores. Se utiliza cuando tenemos muchos datos parecidos, por ejemplo, para almacenar la temperatura media diaria en Málaga durante el último año podríamos utilizar las variables $temp0,$temp1,$temp2,$temp3,$temp4,... y así hasta 365 variables distintas pero sería poco práctico; es mejor utilizar un array de nombre $temp y usar un índice para referinos a una temperatura concreta.</h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>Ejemplo 5.1.1 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
      $temp[0]=16;
      $temp[1]=15;
      $temp[2]=17;
      $temp[3]=15;
      $temp[4]=16;
      echo "La temperatura de Málaga el cuarto día del año fue de ";
      echo $temp[3], "ºC";
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
    $temp[0] = 16;
    $temp[1] = 15;
    $temp[2] = 17;
    $temp[3] = 15;
    $temp[4] = 16;
    echo "La temperatura de Málaga el cuarto día del año fue de ";
    echo $temp[3], "ºC";
    echo "<br><br>";
    var_dump($temp);
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>