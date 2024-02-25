# -- coding: latin-1 --
import sys
import json


def convertir_cadena_a_lista(cadena):
    # Reemplazar la secuencia de escape \\u00f1 con el carácter "ñ"
    cadena_con_n = cadena.replace("\\u00f1", "ñ")

    # Eliminar los corchetes al principio y al final de la cadena
    cadena_sin_corchetes = cadena_con_n.strip("[]")

    # Dividir la cadena en elementos individuales
    elementos = cadena_sin_corchetes.split(",")

    # Eliminar espacios en blanco alrededor de cada elemento y crear la lista
    lista = [elemento.strip() for elemento in elementos]

    return lista


# Obtener los argumentos de la línea de comandos

numero = json.loads(sys.argv[1])
minimo = int(sys.argv[2])
xMinimo = int(sys.argv[3])
yMinimo = int(sys.argv[4])


mensaje = "<table border='1'>"

# Añadir fila de índices de columna arriba de la tabla
mensaje += "<tr>"
mensaje += "<td></td>"  # Celda vacía para ajustar el índice de fila
for y in range(9):
    mensaje += f"<td style='background-color: yellow;'>{y}</td>"
mensaje += "</tr>"

# Generar las filas de la tabla con los datos
for x in range(6):
    mensaje += "<tr>"
    # Añadir índice de fila a la izquierda de la fila
    mensaje += f"<td style='background-color: orange;'>&nbsp&nbsp{x}</td>"
    for y in range(9):
        # Determinar el color de fondo basado en la posición de la celda
        color_fondo = "white" if (x + y) % 2 == 0 else "grey"

        # Resaltar el valor mínimo y su posición
        if numero[x][y] == minimo:
            mensaje += f"<td style='background-color: #33E9FF ;'>{numero[x][y]}</td>"
        elif abs(x - xMinimo) == abs(y - yMinimo):
            mensaje += f"<td style='background-color: green; '>{numero[x][y]}</td>"
        else:
            mensaje += (
                f"<td style='background-color: {color_fondo};'>{numero[x][y]}</td>"
            )
    mensaje += "</tr>"

# Finalizar la tabla HTML
mensaje += "</table>"
mensaje += (
    f"<br>El valor mínimo es {minimo}<br> en la posición [{xMinimo}][{yMinimo}]"
)

# Imprimir el mensaje (tabla HTML y valor mínimo)
print(mensaje)
