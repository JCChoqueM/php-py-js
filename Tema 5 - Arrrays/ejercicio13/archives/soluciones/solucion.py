# -- coding: latin-1 --
import sys


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
import random

lineal = []
i = 0

while i < 54:
    n = random.randint(100, 999)
    if n not in lineal:
        lineal.append(n)
        i += 1

minimo = 999
i = 0
xMinimo = 0
yMinimo = 0
numero = []

for x in range(6):
    numero.append([])
    for y in range(9):
        numero[x].append(lineal[i])
        i += 1
        if numero[x][y] < minimo:
            minimo = numero[x][y]
            xMinimo = x
            yMinimo = y

mensaje = "<table border='1'>"
mensaje += "<tr>"
mensaje += "<td></td>"
for y in range(9):
    mensaje += f"<td style='background-color: yellow;'>{y}</td>"
mensaje += "</tr>"
for x in range(6):
    mensaje += "<tr>"
    mensaje += f"<td style='background-color: orange;'>{x}</td>"
    for y in range(9):
        colorFondo = "" if (x + y) % 2 == 0 else "grey"
        if numero[x][y] == minimo:
            mensaje += f"<td style='background-color: #33E9FF; color: black;'>{numero[x][y]}</td>"
        elif abs(abs(x) - abs(xMinimo)) == abs(abs(y) - abs(yMinimo)):
            mensaje += f"<td style='background-color: green;'>{numero[x][y]}</td>"
        else:
            mensaje += (
                f"<td style='background-color: {colorFondo};'>{numero[x][y]}</td>"
            )
    mensaje += "</tr>"
mensaje += "</table>"
mensaje += (
    f"<br>El valor mínimo es {minimo}<br> en la posición [{xMinimo}][{yMinimo}]"
)

print(mensaje)
