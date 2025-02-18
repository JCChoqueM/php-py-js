<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
//SECTION - inicia imprimirGenerarArrayInt
function imprimirGenerarArrayInt($input1)
{
    $mensajeError = "";
    if (is_array($input1)) {

        $mensajeError = "El array Generado es:";
        $mensajeError .= crearTabla($input1, -1, -1);
    } else {
        echo "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}
//!SECTION - fin imprimirGenerarArrayInt

//SECTION - inicia imprimirMinimoArrayInt 
function imprimirMinimoArrayInt($input1)
{
    $mensajeError = "";
    if (is_array($input1)) {

        $mensajeError = "El valor minimo del array es: " . minimoArrayInt($input1);
        $mensajeError .= crearTabla($input1, -1, minimoArrayInt($input1));
    } else {
        echo "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}
//!SECTION - fin imprimirMinimoArrayInt
//SECTION - inicia imprimirMaximoArrayInt 
function imprimirMaximoArrayInt($input1)
{
    $mensajeError = "";
    if (is_array($input1)) {

        $mensajeError = "El valor maximo del array es: " . maximoArrayInt($input1);
        $mensajeError .= crearTabla($input1, -1, maximoArrayInt($input1));
    } else {
        echo "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}
//!SECTION - fin imprimirMaximoArrayInt
//SECTION - inicia imprimirMediaArrayInt 
function imprimirMediaArrayInt($input1)
{
    $mensajeError = "";

    if (is_array($input1)) {
        $media = mediaArrayInt($input1);

        // Construir la expresión matemática
        $suma = array_sum($input1);
        $cantidad = count($input1);
        $expresion = implode(" + ", $input1) . " / {$cantidad} = {$media}";

        $mensajeError = "La media del array es: " . $media."<br><br>" ;
        $mensajeError .= "Expresión matemática utilizada: <br>" . $expresion ;

        // Mostrar los datos usados
        $mensajeError .= crearTabla($input1, -1, -1);
    } else {
        $mensajeError = "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}
//!SECTION - fin imprimirMediaArrayInt
//SECTION - inicia imprimirVolteaArrayInt 
function imprimirVolteaArrayInt($input1)
{
    $mensajeError = "";

    if (is_array($input1)) {

        // Utilizar $extra también como número de rotaciones
        $arrayVolteado = volteaArrayInt($input1);

        // Añadir el array original y el array rotado a la salida
        $mensajeError .= "Array Original:" . crearTablaRotada($input1, -1) . "<br>";
        $mensajeError .= "Array Volteado:" . crearTablaRotada($arrayVolteado, -1) . "<br>";
    } else {
        $mensajeError = "El índice 'arrayGenerado' no es un array.";
    }

    return $mensajeError;
}
//!SECTION - fin imprimirVolteaArrayInt