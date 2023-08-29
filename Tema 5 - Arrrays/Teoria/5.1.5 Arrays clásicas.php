<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo 5.1.5 </title>
</head>

<body>
    <h2>Ejemplo 5.1.5</h2>
    <h3 style="width:65% ">Como puedes ver en los ejemplos anteriores, no es necesario definir previamente un array antes de utilizarlo. Tampoco hay limite en cuanto al número de elementos que se pueden añadir al mismo. No obstante, se pueden crear arrays de tamaño fijo con SplFixedArray que son más eficientes en cuanto a uso de la memoria y más rápidas en las operaciones de lectura y escritura.
        La funcion var_sump( ) se utiliza para mostrar el tipo y el valor de un dato, en este caso muestra los tipos y valores de cada uno de los elementos del array. </h3>
    <pre> <b>Ejemplo:
&lt;!DOCTYPE html>
&lt;html lang="es">
&lt;head>
    &lt;meta charset="UTF-8">
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
    &lt;title>Ejemplo 5.1.5 &lt;/title>
&lt;/head>
&lt;body&gt;
    &lt;?php
       $a = new SplFixedArray(10);
        $a[0] = 843;
        $a[2] = 11;
        $a[6] = 1372;
        /* los valores del array que no se ha inicializado son NULL */
        foreach ($a as $elemento) {
        var_dump($elemento);
        echo "&lt;br&gt;";
      }
    ?&gt;
&lt;/body&gt;
&lt;/html>
</b>
</pre>
    <h4>Resultado: los valores del array que no se ha inicializado son NULL</h4>
    <!-- SECTION inicia codigo -->
    <?php
    $a = new SplFixedArray(10);
    $a[0] = 843;
    $a[2] = 11;
    $a[6] = 1372;
    /* los valores del array que no se ha inicializado son NULL */
    foreach ($a as $elemento) {
        var_dump($elemento);
        echo "<br>";
    }
    ?>
    <!-- !SECTION finaliza codigo -->
</body>

</html>