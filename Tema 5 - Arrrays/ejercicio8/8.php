<?php

if (!isset($_GET['n'])) {
    $contadorNumeros = 1;
    $numeroTexto = "";
} else {
    $contadorNumeros = $_GET['contadorNumeros'];
    $numeroTexto = $_GET['numeroTexto'];
}

if ($contadorNumeros < 4) {
    $contadorNumeros = $_GET['contadorNumeros'];
    $n = $_GET['n'];
    $numeroTexto = $_GET['numeroTexto'];

    if ($numeroTexto == "") {
        $numeroTexto = $n;
    } else {
        $numeroTexto = $numeroTexto . ' ' . $n;
    }

    $contadorNumeros++;
}

if (!isset($_GET['n']) || ($contadorNumeros < 4)) {
?>
    <form action="8.php" method="get">
        <input type="hidden" name="ejercicio" value="08">
        Introduzca un número:
        <input type="number" name="n" autofocus="" required="">
        <input type="hidden" name="contadorNumeros" value="<?php echo $contadorNumeros; ?>">
        <input type="hidden" name="numeroTexto" value="<?php echo $numeroTexto; ?>">
        <input type="submit" value="OK">
    </form>
<?php
}

////////////////////////////////////////////////////////////////
//  Programa principal una vez recogidos los datos del array.
//  El array con los números es $numero
////////////////////////////////////////////////////////////////

if ($contadorNumeros == 4) {
    $numero = explode(" ", $numeroTexto);

    // Muestra el array original

    // Índice
    echo "Array original:<br>";
    echo "<table><tr>";
    for ($i = 0; $i < 3; $i++) {
        echo "<td>$i</td>";
    }
    echo "</tr>";

    // Contenido
    for ($i = 0; $i < 3; $i++) {
        echo "<td>" . $numero[$i] . "</td>";
    }
    echo "</tr></table>";

    // Guarda los primos y los no primos en arrays diferentes
    $cuentaPrimos = 0;
    $cuentaNoPrimos = 0;

    for ($i = 0; $i < 3; $i++) {
        $esPrimo = true;

        for ($j = 2; $j < $numero[$i]; $j++) {
            if (($numero[$i] % $j) == 0) {
                $esPrimo = false;
            }
        }

        if ($esPrimo) {
            $primos[$cuentaPrimos] = $numero[$i];
            $cuentaPrimos++;
        } else {
            $noPrimos[$cuentaNoPrimos] = $numero[$i];
            $cuentaNoPrimos++;
        }
    }

    // Guarda los datos en el array original
    // según lo que pide el ejercicio

    for ($i = 0; $i < $cuentaPrimos; $i++) {
        $numero[$i] = $primos[$i];
    }

    for ($i = $cuentaPrimos; $i < $cuentaPrimos + $cuentaNoPrimos; $i++) {
        $numero[$i] = $noPrimos[$i - $cuentaPrimos];
    }

    // Muestra el array resultante

    // Índice
    echo "<br>Array resultante con los primos al principio y los no primos al final:<br>";
    echo "<table><tr>";
    for ($i = 0; $i < 3; $i++) {
        echo "<td>$i</td>";
    }
    echo "</tr>";

    // Contenido
    for ($i = 0; $i < 3; $i++) {
        echo "<td>" . $numero[$i] . "</td>";
    }
    echo "</tr></table>";
}




$esPrimo = true;

if ($n <= 1) {
    $esPrimo = false;
} elseif ($n <= 3) {
    $esPrimo = true;
} elseif ($n % 2 == 0) {
    $esPrimo = false;
} else {
    for ($i = 2; $i * $i <= $n; $i++) {
        if ($n % $i == 0) {
            $esPrimo = false;
            break;
        }
    }
}

if ($esPrimo) {
    echo "$n es un número primo.";
} else {
    echo "$n no es un número primo.";
}