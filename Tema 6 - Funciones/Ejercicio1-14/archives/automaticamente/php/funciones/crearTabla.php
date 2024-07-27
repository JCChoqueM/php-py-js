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


function crearTablaTrozo($number, $startIndex, $highlightStart = -1, $highlightEnd = -1)
{
    $numberString = strval($number);
    $headerText = $startIndex === 0 ? "Posición" : "Dígito";
    $tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">';

    // Crear la fila de encabezado para los índices
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>$headerText</th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $index = $i + $startIndex;
        $cellStyle = ($i >= $highlightStart && $i <= $highlightEnd) ? "background-color: yellow;" : "background-color: lightblue;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 5px; text-align: center; $cellStyle font-size: small; font-weight: bold;'>$index</td>";
    }
    $tableHtml .= "</tr>";

    // Crear la fila de encabezado para los dígitos
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $digit = $numberString[$i];
        $cellStyle = ($i >= $highlightStart && $i <= $highlightEnd) ? "background-color: yellow;" : "background-color: lightgreen;";
        $tableHtml .= "<td style='border: 1px solid black; padding: 15px; text-align: center; $cellStyle font-size: medium; font-weight: bold;'>$digit</td>";
    }
    $tableHtml .= "</tr>";

    $tableHtml .= "</table>";
    return $tableHtml;
}

function crearTablaPegado($pegado1, $pegado2)
{
    // Estructura de la tabla en HTML
    $tablaHtml = '<table style="border-collapse: collapse; width: 300px; margin: 5px auto;">';

    // Fila de encabezado
    $tablaHtml .= '<tr>';
    $tablaHtml .= '<th style="border: 1px solid black; padding: 5px; text-align: center; width: 50%;">Pegado1</th>';
    $tablaHtml .= '<th style="border: 1px solid black; padding: 5px; text-align: center; width: 50%;">Pegado2</th>';
    $tablaHtml .= '</tr>';

    // Filas con el contenido de pegado1 y pegado2
    $tablaHtml .= '<tr>';
    $tablaHtml .= '<td style="border: 1px solid black; padding: 5px; text-align: center;">' . $pegado1 . '</td>';
    $tablaHtml .= '<td style="border: 1px solid black; padding: 5px; text-align: center;">' . $pegado2 . '</td>';
    $tablaHtml .= '</tr>';

    // Cerrar la tabla
    $tablaHtml .= '</table>';

    return $tablaHtml;
}
