<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <?php
    // Programa principal ////////////////////////////////////////////////////
    $numero = isset($_POST['n']) ? $_POST['n'] : null;
    if (!isset($numero)) {
    ?>
        Introduzca un número para saber si es primo o no.<br>
        <form action="ejemplo6.1.2.php" method="post">
            <input type="number" name="n" min="0" autofocus><br>
            <input type="submit" value="Aceptar">
        </form>
    <?php
    } else {
        if (esPrimo($numero)) {
            echo "El $numero es primo.";
        } else {
            echo "El $numero no es primo.";
        }
    }
    // Funciones /////////////////////////////////////////////////////////////
    function esPrimo($n)
    {
        $esPrimo = true;
        for ($i = 2; $i < $n; $i++) {
            if ($n % $i == 0) {
                $esPrimo = false;
            }
        }
        // El 0 y el 1 no se consideran primos
        if (($n == 0) || ($n == 1)) {
            $esPrimo = false;
        }
        return $esPrimo;
    }
    ?>
</body>

</html>