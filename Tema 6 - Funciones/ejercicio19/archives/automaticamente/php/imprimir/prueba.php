<?php
// app/includes/archivo2.php
include __DIR__ . '/../funciones/funciones.php';

// Función general para imprimir conversiones
function imprimirConversion($numero, $base, $destino, $conversionFunction)
{
    $mensajeError = "";

    // Verificar si el número es válido
    $estado = validarNumero($numero, $base) ? "1" : "0";
    switch ($estado) {
        case "0":
            if ($numero == "") {
                $mensajeError = "El campo está vacío";
            } else {
                $mensajeError = "$numero no es una base válida.";
            }
            break;
        case "1":
            // Convertir el número usando la función proporcionada

            $mensajeError = "El número: $numero $base <br>Es igual a: " . $conversionFunction($numero) . " $destino";
            break;
        default:
            $mensajeError = "Error desconocido. Por favor, revise las entradas.";
    }

    return $mensajeError;
}

// Funciones específicas de conversión
function imprimirIguales($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, 'Iguales');
}
function imprimirDecimalBinario($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, 'DecimalBinario');
}

function imprimirDecimalHexadecimal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, 'DecimalHexadecimal');
}

function imprimirDecimalOctal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, 'DecimalOctal');
}

function imprimirBinarioDecimal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, 'BinarioDecimal');
}

function imprimirBinarioHexadecimal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, function ($num) {
        return DecimalHexadecimal(BinarioDecimal($num));
    });
}

function imprimirBinarioOctal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, function ($num) {
        return DecimalOctal(BinarioDecimal($num));
    });
}

function imprimirHexadecimalDecimal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, 'HexadecimalDecimal');
}

function imprimirHexadecimalBinario($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, function ($num) {
        return DecimalBinario(HexadecimalDecimal($num));
    });
}

function imprimirHexadecimalOctal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, function ($num) {
        return DecimalOctal(HexadecimalDecimal($num));
    });
}

function imprimirOctalDecimal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, 'OctalDecimal');
}

function imprimirOctalBinario($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, function ($num) {
        return DecimalBinario(OctalDecimal($num));
    });
}

function imprimirOctalHexadecimal($numero, $base, $destino)
{
    return imprimirConversion($numero, $base, $destino, function ($num) {
        return DecimalHexadecimal(OctalDecimal($num));
    });
}
