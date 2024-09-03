<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';
//SECTION - inicio imprimirEstaEnArrayInt 
function imprimirEstaEnArrayInt($input1, $extra)
{
    $mensajeError = "";
    if (is_array($input1)) {

        if (estaEnArrayInt($input1, $extra)) {
            $mensajeError = "El numero $extra si esta en el array";
        } else {
            $mensajeError
                = "El numero $extra NO esta en el array";
        }
        $mensajeError .= crearTabla($input1, -1, $extra);
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
    // Asegúrate de que $input1 es un array antes de llamar a la función
    if (is_array($input1)) {
        $posiciones = posicionEnArrayInt($input1, $extra);
        if (!empty($posiciones)) {
            $mensajeError= "Las posiciones del valor $extra son: " . implode(', ', $posiciones);
           $mensajeError .= crearTabla($input1, -1, $extra); 
        } else {
            $mensajeError= "El valor $extra no está en el array.";
            $mensajeError .= crearTabla($input1, -1, $extra);
        }
    } else {
        $mensajeError= "El primer parámetro no es un array.";
    }
    return $mensajeError;
}
//!SECTION - fin imprimirPosicionEnArrayInt

//SECTION - inicio imprimirRotaDerechaArrayInt 
function imprimirRotaDerechaArrayInt($input1, $extra)
{
    $mensajeError = "";
    if (is_array($input1)) {

        $arrayRotado = rotaDerechaArrayInt($input1, $extra);

        // Añadir el array rotado a la salida
        $mensajeError .= "Array Original".crearTabla($input1, 0, $extra);
        $mensajeError .= "Array rotado: $extra veces " . crearTabla($arrayRotado,$input1[0], $input1[0]) ;
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
