<?php
$a = intval(abs($_POST['a']));
$capicua = false;
if ($a <= 99999) {
    if ($a < 10) {
        $capicua = true;
        echo "$a es un numero capicuo1";
    } elseif ($a >= 10 && $a <= 99) {
        if (intval($a / 10) == ($a % 10)) {
            $capicua = true;
            echo "$a es numero capicuo2";
        } else {
            echo "$a NO es numero capicuo2";
        }
    } elseif ($a >= 100 && $a <= 999) {
        if (intval($a / 100) == ($a % 10)) {
            $capicua = true;
            echo "$a Es numero capicuo3";
        } else {
            echo "$a No es numero capicuo3";
        }
    } elseif ($a >= 1000 && $a <= 9999) {
        if ((intval($a / 1000) == ($a % 10)) && ((intval($a / 100) % 10) == (intval($a / 10) % 10))) {
            $capicua = true;
            echo "$a Es numero capicuo4";
        } else {
            echo "$a NO es numero capicuo4";
        }
    } elseif ($a >= 10000 && $a <= 99999) {
        if ((intval($a / 10000) == ($a % 10)) && ((intval($a / 1000) % 10) == (intval($a / 10) % 10))) {
            $capicua = true;
            echo "$a Es Numero capicuo5";
        } else {
            echo "$a NO es numero capicuo5";
        }
    }
    if ($capicua) {
        echo "<br>$a es numero capicua por true";
    } else {
        echo "<br>$a NO es numero capicua por false";
    }
} else {
    echo "El valor excede el permitido";
}
