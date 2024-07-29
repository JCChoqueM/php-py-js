<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
 
    // Construir el comando de Python con las dos arrays como argumentos
    $command = "python solucion.py " ;

    // Ejecutar el script de Python
    $output = shell_exec($command);

    // Imprimir la salida del script de Python
    echo $output;

}
