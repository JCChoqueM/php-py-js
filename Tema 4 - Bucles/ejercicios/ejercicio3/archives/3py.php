<?php
$num1 = $_GET["num1"];

$output = shell_exec("python t3.py " . $num1);
echo $output;
