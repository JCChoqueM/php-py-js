<?php
function crearTabla($number, $startIndex)
{
    $numberString = strval($number);
    $headerText = $startIndex === 0 ? "Posicion" : "Dígito";
    $tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">';

    // Crear la fila de encabezado para los índices
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>$headerText</th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $index = $i + $startIndex;
        $tableHtml .= "<td style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightblue; font-size: small; font-weight: bold;'>$index</td>";
    }
    $tableHtml .= "</tr>";

    // Crear la fila de encabezado para los dígitos
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $digit = $numberString[$i];
        $tableHtml .= "<td style='border: 1px solid black; padding: 15px; text-align: center; background-color: lightgreen; font-size: medium; font-weight: bold;'>$digit</td>";
    }
    $tableHtml .= "</tr>";

    $tableHtml .= "</table>";
    return $tableHtml;
}

function crearTablaReves($number, $startIndex)
{
    $numberString = strval($number);
    $headerText = $startIndex === 0 ? "Posicion" : "Dígito";
    $tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">';

    // Crear la fila de encabezado para los índices
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>$headerText</th>";
    for ($i = strlen($numberString) - 1; $i >= 0; $i--) {
        $index = $i + $startIndex;
        $tableHtml .= "<td style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightblue; font-size: small; font-weight: bold;'>$index</td>";
    }
    $tableHtml .= "</tr>";

    // Crear la fila de encabezado para los dígitos
    $tableHtml .= "<tr>";
    $tableHtml .= "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>";
    for ($i = 0; $i < strlen($numberString); $i++) {
        $digit = $numberString[$i];
        $tableHtml .= "<td style='border: 1px solid black; padding: 15px; text-align: center; background-color: lightgreen; font-size: medium; font-weight: bold;'>$digit</td>";
    }
    $tableHtml .= "</tr>";

    $tableHtml .= "</table>";
    return $tableHtml;
}
