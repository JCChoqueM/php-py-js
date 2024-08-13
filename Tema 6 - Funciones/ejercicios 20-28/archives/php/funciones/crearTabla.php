<?php
function crearTabla($array, $highlightPosition = -1, $highlightValue = null)
{
    $tableHtml = '<table style="border-collapse: collapse; margin: 20px auto; width: 80%;">';

    // Crear la fila de encabezado para los índices
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 10px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>Posición</th>";
    foreach ($array as $index => $value) {
        $cellStyle = $index == $highlightPosition ? "background-color: yellow;" : "background-color: lightblue;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 10px; text-align: center; $cellStyle font-size: small; font-weight: bold;'>$index</td>";
    }
    $tableHtml .= "</tr>";

    // Crear la fila de valores del array
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 10px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>Valor</th>";
    foreach ($array as $index => $value) {
        // Resaltar el valor si coincide con el valor especificado
        $cellStyle = $value == $highlightValue ? "background-color: orange;" : "background-color: lightgreen;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 15px; text-align: center; $cellStyle font-size: medium; font-weight: bold;'>$value</td>";
    }
    $tableHtml .= "</tr>";

    $tableHtml .= "</table>";
    return $tableHtml;
}
