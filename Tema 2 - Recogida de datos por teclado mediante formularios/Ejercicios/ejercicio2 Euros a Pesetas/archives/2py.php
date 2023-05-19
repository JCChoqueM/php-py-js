<?php
$num1 = $_GET["num1"];
$output = shell_exec("python 2.py " . $num1);
echo $output;
