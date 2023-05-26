<?php
$num1 = $_GET["num1"];

$output = shell_exec("python do_while.py " . $num1);
echo $output;
