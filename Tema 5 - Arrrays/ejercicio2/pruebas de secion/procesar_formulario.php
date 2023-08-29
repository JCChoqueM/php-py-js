<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numero = $_POST["numero"];

    if (!isset($_SESSION["numeros"])) {
        $_SESSION["numeros"] = array();
    }

    if (count($_SESSION["numeros"]) < 4) {
        $_SESSION["numeros"][] = $numero;
    }

    header("Location: formulario.html");
}
