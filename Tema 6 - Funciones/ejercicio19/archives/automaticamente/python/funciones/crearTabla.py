def crearTabla(number, startIndex, highlightPosition=-1):
    numberString = str(number)
    headerText = "Posicion" if startIndex == 0 else "Digito"
    tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">'

    # Crear la fila de encabezado para los índices
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>{headerText}</th>"
    for i in range(len(numberString)):
        index = i + startIndex
        cellStyle = (
            "background-color: yellow;"
            if i == highlightPosition
            else "background-color: lightblue;"
        )
        tableHtml += f"<td style='border: 1px solid black; padding: 5px; text-align: center; {cellStyle} font-size: small; font-weight: bold;'>{index}</td>"
    tableHtml += "</tr>"

    # Crear la fila de encabezado para los dígitos
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>"
    for i, digit in enumerate(numberString):
        cellStyle = (
            "background-color: yellow;"
            if i == highlightPosition
            else "background-color: lightgreen;"
        )
        tableHtml += f"<td style='border: 1px solid black; padding: 15px; text-align: center; {cellStyle} font-size: medium; font-weight: bold;'>{digit}</td>"
    tableHtml += "</tr>"
    tableHtml += "</tr>"

    tableHtml += "</table>"
    return tableHtml


def crearTablaReves(number, startIndex, highlightPosition=-1):
    numberString = str(number)
    headerText = "Posicion" if startIndex == 0 else "Digito"
    tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">'

    # Crear la fila de encabezado para los índices
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>{headerText}</th>"
    for i in range(len(numberString) - 1, -1, -1):
        index = i + startIndex
        reversePosition = len(numberString) - 1 - i
        cellStyle = (
            "background-color: yellow;"
            if index == highlightPosition
            else "background-color: lightblue;"
        )
        tableHtml += f"<td style='border: 1px solid black; padding: 5px; text-align: center; {cellStyle} font-size: small; font-weight: bold;'>{index}</td>"
    tableHtml += "</tr>"

    # Crear la fila de encabezado para los dígitos
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>"
    for i in range(len(numberString)):
        reversePosition = len(numberString) - 1 - i
        digit = numberString[i]
        cellStyle = (
            "background-color: yellow;"
            if reversePosition == highlightPosition
            else "background-color: lightgreen;"
        )
        tableHtml += f"<td style='border: 1px solid black; padding: 15px; text-align: center; {cellStyle} font-size: medium; font-weight: bold;'>{digit}</td>"
    tableHtml += "</tr>"

    tableHtml += "</table>"
    return tableHtml


def crearTablaTrozo(numero, start_index, highlight_start=-1, highlight_end=-1):
    numero_str = str(numero)
    header_text = "Posicion" if start_index == 0 else "Digito"
    table_html = '<table style="border-collapse: collapse; margin: 20px auto;">'

    # Crear la fila de encabezado para los índices
    table_html += "<tr>"
    table_html += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>{header_text}</th>"
    for i in range(len(numero_str)):
        index = i + start_index
        cell_style = (
            "background-color: yellow;"
            if highlight_start <= i <= highlight_end
            else "background-color: lightblue;"
        )
        table_html += f"<td style='border: 1px solid black; padding: 5px; text-align: center; {cell_style} font-size: small; font-weight: bold;'>{index}</td>"
    table_html += "</tr>"

    # Crear la fila de encabezado para los dígitos
    table_html += "<tr>"
    table_html += "<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>"
    for i in range(len(numero_str)):
        digit = numero_str[i]
        cell_style = (
            "background-color: yellow;"
            if highlight_start <= i <= highlight_end
            else "background-color: lightgreen;"
        )
        table_html += f"<td style='border: 1px solid black; padding: 15px; text-align: center; {cell_style} font-size: medium; font-weight: bold;'>{digit}</td>"
    table_html += "</tr>"

    table_html += "</table>"
    return table_html


def crearTablaPegado(pegado1, pegado2):
    # Estructura de la tabla en HTML
    tabla_html = (
        '<table style="border-collapse: collapse; width: 300px; margin: 5px auto;">'
    )

    # Fila de encabezado
    tabla_html += "<tr>"
    tabla_html += '<th style="border: 1px solid black; padding: 5px; text-align: center; width: 50%;">Pegado1</th>'
    tabla_html += '<th style="border: 1px solid black; padding: 5px; text-align: center; width: 50%;">Pegado2</th>'
    tabla_html += "</tr>"

    # Filas con el contenido de pegado1 y pegado2
    tabla_html += "<tr>"
    tabla_html += f'<td style="border: 1px solid black; padding: 5px; text-align: center;">{pegado1}</td>'
    tabla_html += f'<td style="border: 1px solid black; padding: 5px; text-align: center;">{pegado2}</td>'
    tabla_html += "</tr>"

    # Cerrar la tabla
    tabla_html += "</table>"

    return tabla_html
