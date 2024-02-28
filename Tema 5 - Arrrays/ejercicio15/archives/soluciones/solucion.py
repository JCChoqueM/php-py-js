# -- coding: latin-1 --
import sys
import random

def generarMatrizYDatos():
    # Lista para almacenar una secuencia lineal de números aleatorios únicos
    lineal = []
    i = 0

    # Generación de números aleatorios únicos
    while i < 12 * 12:
        # Generar un número aleatorio entre 0 y 100
        n = random.randint(0, 100)
        # Agregar el número a la secuencia lineal
        lineal.append(n)
        i += 1

    # Creación de la matriz bidimensional
    numero = [[0] * 12 for _ in range(12)]
    i = 0
    for x in range(12):
        for y in range(12):
            # Llenar la matriz con los números aleatorios únicos
            numero[x][y] = lineal[i]
            i += 1

    return numero

bidimensional = generarMatrizYDatos()


def imprimir_tabla(numero, eje_x, eje_y):
    mensaje = "<table border='1'>"
    mensaje += "<tr>"
    mensaje += "<td></td>"
    for y in range(12):
        mensaje += f"<td style='background-color: yellow;'>{y}</td>"
    mensaje += "</tr>"
    for x in range(12):
        mensaje += "<tr>"
        mensaje += f"<td style='background-color: orange;'>&nbsp;&nbsp;{x}</td>"
        for y in range(12):
            color_fondo = get_color_fondo(x, y, eje_x, eje_y)
            mensaje += (
                f"<td style='background-color: {color_fondo};'>{numero[x][y]}</td>"
            )
        mensaje += "</tr>"
    mensaje += "</table>"
    return mensaje


def rotar_tabla(numero):
    copia = [[0 for _ in range(12)] for _ in range(12)]

    for i in range(6):
        for j in range(11 - i):
            copia[i][j + 1] = numero[i][j]

    for i in range(6):
        for j in range(i, 11 - i):
            copia[j + 1][11 - i] = numero[j][11 - i]

    for i in range(6):
        for j in range(i, 11 - i):
            copia[11 - i][j] = numero[11 - i][j + 1]

    for i in range(6):
        for j in range(i, 11 - i):
            copia[j][i] = numero[j + 1][i]

    return copia


def get_color_fondo(x, y, eje_x, eje_y):
    if x in (0, 11) or y in (0, 11):
        if x == eje_x and y == eje_y:
            return "#1EA50E"
        else:
            return "#49FF33"
    elif x in (1, 10) or y in (1, 10):
        if x == eje_x + 1 and y == eje_y + 1:
            return "#5C39D2"
        else:
            return "#7F5FEE"
    elif x in (2, 9) or y in (2, 9):
        if x == eje_x + 2 and y == eje_y + 2:
            return "#F16C09"
        else:
            return "#DC7F3A"
    elif x in (3, 8) or y in (3, 8):
        if x == eje_x + 3 and y == eje_y + 3:
            return "#A41B0C"
        else:
            return "#AA3629"
    elif x in (4, 7) or y in (4, 7):
        if x == eje_x + 4 and y == eje_y + 4:
            return "#CB315C"
        else:
            return "#C94D70"
    elif x in (5, 6) or y in (5, 6):
        if x == eje_x + 5 and y == eje_y + 5:
            return "#FFC300"
        else:
            return "#DBE337"
    else:
        return ""


# Crear matriz de ejemplo


# Llamar a la función imprimir_tabla y rotar_tabla
print(imprimir_tabla(bidimensional, 0, 0))
print("<br>")
rotado = rotar_tabla(bidimensional)
print(imprimir_tabla(rotado, 0, 1))
