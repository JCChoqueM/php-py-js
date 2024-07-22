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
