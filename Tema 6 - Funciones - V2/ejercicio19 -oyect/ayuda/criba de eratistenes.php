<?php
//Criba de Eratóstenes
//Obtener las lista de números a evaluar
$limite=101;
for($i=2;$i<$limite;$i++)
{
  $numeros[$i]=true;
}
 
//Hacer 2 el primer número primo
$numeros[2]=true;
 
//Recorrer los números y para cada uno
for ($n=2;$n<sqrt($limite);$n++)
{
  //Si es primo recorrer los múltiplos y marcarlos como no primo
  if ($numeros[$n])
  {
    for ($i=$n*$n;$i<$limite;$i+=$n)
    {
       $numeros[$i] = false;
    }
  }
}
//Muestro la lista de los primos 
echo "Primos: ";
for ($n = 2; $n < $limite; $n++)
{
  if ($numeros[$n])
  {
    echo $n." ";
  }
}