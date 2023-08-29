<!DOCTYPE html>
<html>

<head>
    <title>Números Pares e Impares</title>
    <style>
        .par {
            color: blue;
        }

        .impar {
            color: red;
        }
    </style>
</head>

<body>

    <?php
    $numbers = [];
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $currentNumber = $_POST["current_number"];
        $numbers[] = $currentNumber;

        if (count($numbers) == 8) {
            foreach ($numbers as $number) {
                $class = $number % 2 == 0 ? "par" : "impar";
                echo "<span class='$class'>$number</span><br>";
            }
            echo "¡Se han ingresado todos los números!";
        } else {
            echo "Número ingresado: $currentNumber";
        }
    }
    ?>

    <form method="post" action="">
        <?php
        $remainingNumbers = 8 - count($numbers);
        if ($remainingNumbers > 0) {
            echo "Introduce el número ($remainingNumbers restantes): ";
            echo "<input type='number' name='current_number'>";
            echo "<input type='submit' value='Ingresar'>";
        } else {
            echo "¡Se han ingresado todos los números!";
        }
        ?>
    </form>

</body>

</html>