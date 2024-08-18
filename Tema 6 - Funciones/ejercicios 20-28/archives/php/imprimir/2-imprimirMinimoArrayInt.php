<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
//SECTION - inicio imprimirEstaEnArrayInt 
function imprimirEstaEnArrayInt($input1, $extra)
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
//!SECTION - fin imprimirEstaEnArrayInt

//SECTION - inicio imprimirPosicionEnArrayInt 
function imprimirPosicionEnArrayInt($input1, $extra)
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
//!SECTION - fin imprimirPosicionEnArrayInt

//SECTION - inicio imprimirRotaDerechaArrayInt 
function imprimirRotaDerechaArrayInt($input1, $extra)
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
//!SECTION - fin imprimirRotaDerechaArrayInt

//SECTION - inicio imprimirRotaIzquierdaArrayInt 
function
imprimirRotaIzquierdaArrayInt($input1, $extra)
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
//!SECTION - fin imprimirRotaIzquierdaArrayInt
