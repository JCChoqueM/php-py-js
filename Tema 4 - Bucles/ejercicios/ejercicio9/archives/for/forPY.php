<?php
$num1 = $_GET["num1"];

$output = shell_exec("python for_py.py " . $num1);
echo $output;
