<!--Vamos a ampliar uno de los ejercicios de la relación anterior para considerar las horas extras. 
Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta que las horas
ordinarias (40 primeras horas de trabajo)se pagan a 12 euros la hora. A partir de la hora 41, se
pagan a 16 euros la hora.-->
<?php
$nu1=$_POST["n1"];
$semana=12*40;
if ($nu1>=0){
if($nu1<=40 && $nu1>=0){
    $pago1=12*$nu1;
    echo str_repeat("&nbsp;", 20)."DATOS RECIBIDOS";
    echo "<br/> Horas trabajadas: ".$nu1." hrs";
    echo "<br/> Horas extras trabajadas: 0 hrs";
    echo "<br/> Pago horas extras: 0 euros";
    echo "<br/> Su salario es: ".$nu1." * 12=".$pago1."  euros";
}
elseif ($nu1>40){
$horaextra=$nu1-40;
$pago2=$horaextra*16;
    echo str_repeat("&nbsp;", 20)." DATOS RECIBIDOS";
    echo "<br/> Salario semanal: ".$semana." euros";
    echo "<br/> Horas trabajadas: ".$nu1." hrs";
    echo "<br/> Horas extras trabajadas: ".$horaextra." hrs";
    echo "<br/> Pago horas extras: ".$horaextra." * 16= ".$pago2;
    echo "<br/> Su salario es: ".$semana."+".$pago2."=".$semana+$pago2."  euros";
}
}
else{
    echo "Informacion no valida";
}

//echo "<br/> el valor de".$40." es: "."3";


?>