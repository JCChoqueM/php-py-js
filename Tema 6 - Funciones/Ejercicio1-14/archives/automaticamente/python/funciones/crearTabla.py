def crearTabla(number, startIndex):
    numberString = str(number)
    headerText = "Posicion" if startIndex == 0 else "Dígito"
    tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">'

    # Crear la fila de encabezado para los índices
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>{headerText}</th>"
    for i in range(len(numberString)):
        index = i + startIndex
        tableHtml += f"<td style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightblue; font-size: small; font-weight: bold;'>{index}</td>"
    tableHtml += "</tr>"

    # Crear la fila de encabezado para los dígitos
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>"
    for digit in numberString:
        tableHtml += f"<td style='border: 1px solid black; padding: 15px; text-align: center; background-color: lightgreen; font-size: medium; font-weight: bold;'>{digit}</td>"
    tableHtml += "</tr>"

    tableHtml += "</table>"
    return tableHtml


def crearTablaReves(number, startIndex):
    numberString = str(number)
    headerText = "Posicion" if startIndex == 0 else "Dígito"
    tableHtml = '<table style="border-collapse: collapse; margin: 20px auto;">'

    # Crear la fila de encabezado para los índices
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'>{headerText}</th>"
    for i in range(len(numberString) - 1, -1, -1):
        index = i + startIndex
        tableHtml += f"<td style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightblue; font-size: small; font-weight: bold;'>{index}</td>"
    tableHtml += "</tr>"

    # Crear la fila de encabezado para los dígitos
    tableHtml += "<tr>"
    tableHtml += f"<th style='border: 1px solid black; padding: 5px; text-align: center; background-color: lightgray; font-size: small; font-weight: bold;'></th>"
    for digit in numberString:
        tableHtml += f"<td style='border: 1px solid black; padding: 15px; text-align: center; background-color: lightgreen; font-size: medium; font-weight: bold;'>{digit}</td>"
    tableHtml += "</tr>"

    tableHtml += "</table>"
    return tableHtml
