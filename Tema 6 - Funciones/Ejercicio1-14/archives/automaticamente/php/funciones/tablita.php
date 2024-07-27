<?php
$morado = "style='color: purple;'";
$naranja = "style='color: orange'";
function generarTabla($pegado1, $pegado2)
{
    // Estructura de la tabla en HTML
    $tablaHtml = '<table style="border-collapse: collapse; width: 30%; margin: 5px auto;">';

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

// Ejemplo de uso
$pegado1 = "Literal y mas alla: <span $naranja>0</span><span $morado>9</span>";
$pegado2 = "90";
/* echo generarTabla($pegado1, $pegado2); */
