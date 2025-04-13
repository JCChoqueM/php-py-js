<?php
session_start();
$_SESSION["nombre"] = "ju2an";
echo "El nombre de usuario es: " . $_SESSION["nombre"];