<?php
$num1 = $_GET["num1"];
$num2 = $_GET["num2"];
$output = shell_exec("python 5.py " . $num1 . " " . $num2);
echo $output;
