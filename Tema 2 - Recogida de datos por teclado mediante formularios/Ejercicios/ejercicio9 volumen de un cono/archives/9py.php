<?php
$num1 = $_GET["num1"];
$num2 = $_GET["num2"];
$output = shell_exec("python 9.py " . $num1 . " " . $num2);
echo $output;
