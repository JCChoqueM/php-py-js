<?php
$num1 = $_GET["num1"];

$output = shell_exec("python t5.py " . $num1);
echo $output;
