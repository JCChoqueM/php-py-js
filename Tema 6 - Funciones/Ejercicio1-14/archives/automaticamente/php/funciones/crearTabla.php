<?php
function crearTabla($number, $startIndex, $highlightPosition = -1)
{
    $numberString = strval($number);
    $headerText = $startIndex === 0 ? "Posicion" : "Dígito";
    $tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">';

    // Crear la fila de encabezado para los índices
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>$headerText</th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $index = $i + $startIndex;
        $cellStyle = $i == $highlightPosition ? "background-color: yellow;" : "background-color: lightblue;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 5px; text-align: center; $cellStyle font-size: small; font-weight: bold;'>$index</td>";
    }
    $tableHtml .= "</tr>";

    // Crear la fila de encabezado para los dígitos
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $digit = $numberString[$i];
        $cellStyle = $i == $highlightPosition ? "background-color: yellow;" : "background-color: lightgreen;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 15px; text-align: center; $cellStyle font-size: medium; font-weight: bold;'>$digit</td>";
    }
    $tableHtml .= "</tr>";

    $tableHtml .= "</table>";
    return $tableHtml;
}


function crearTablaReves($number, $startIndex, $highlightPosition = -1)
{
    $numberString = strval($number);
    $headerText = $startIndex === 0 ? "Posicion" : "Dígito";
    $tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">';

    // Crear la fila de encabezado para los índices
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>$headerText</th>";
    for ($i = strlen($numberString) - 1; $i >= 0; $i--) {
        $index = $i + $startIndex;
        $reversePosition = strlen($numberString) - 1 - $i;
        $cellStyle = $index == $highlightPosition ? "background-color: yellow;" : "background-color: lightblue;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 5px; text-align: center; $cellStyle font-size: small; font-weight: bold;'>$index</td>";
    }
    $tableHtml .= "</tr>";

    // Crear la fila de encabezado para los dígitos
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $reversePosition = strlen($numberString) - 1 - $i;
        $digit = $numberString[$i];
        $cellStyle = $reversePosition == $highlightPosition ? "background-color: yellow;" : "background-color: lightgreen;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 15px; text-align: center; $cellStyle font-size: medium; font-weight: bold;'>$digit</td>";
    }
    $tableHtml .= "</tr>";

    $tableHtml .= "</table>";
    return $tableHtml;
}
