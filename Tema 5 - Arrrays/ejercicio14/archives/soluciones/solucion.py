# -- coding: latin-1 --
import sys
import json


def usar_input():
    try:
        # Obtener el valor del input y convertirlo a minúsculas
        valor = sys.argv[1].lower().strip()

        # Verificar si el valor tiene la longitud adecuada
        if len(valor) != 2:
            print("La combinación debe tener exactamente dos caracteres y soy pY.")
            return None  # Devolver None si el valor no tiene la longitud adecuada

        letra = valor[0]
        numero = valor[1]

        # Verificar si la letra está dentro del rango de "a" a "h" y si el número está dentro del rango de "1" a "8"
        if letra < "a" or letra > "h" or numero < "1" or numero > "8":
            print(
                "La combinación debe estar dentro del rango de 'a1' a 'h8'. soy de PY"
            )
            return None

        # Obtener los valores numéricos asociados a la letra y al número

        # Devolver un diccionario con los valores numéricos obtenidos
        return {"ejeX": numero, "ejeY": letra}
    except Exception as e:
        print("Error:", e)


resultado = usar_input()
if resultado:
    numero = resultado["ejeX"]
    letra = resultado["ejeY"]
else:
    exit()
ejeX = ord("8") - ord(numero)
ejeY = ord(letra) - ord("a")


mensaje = f"Posicion insertada{sys.argv[1]} Resuleto con Python"

tabla_ancho = 300  # Ancho de la tabla
tabla_alto = 300  # Alto de la tabla
celula_ancho = 35  # Ancho de las celdas
celula_alto = 35  # Alto de las celdas

mensaje += f"<table border='1' style='border-collapse: collapse; width: {tabla_ancho}px; height: {tabla_alto}px;'>"
mensaje += "<tr><td style='width: {celula_ancho}px; height: {celula_alto}px;'></td>"
# Añadir letras a la derecha
for y in range(8):
    mensaje += (
        f"<td style='background-color: yellow; width: {celula_ancho}px; height: {celula_alto}px;'>"
        + chr(97 + y)
        + "</td>"
    )
mensaje += f"<td style='width: {celula_ancho}px; height: {celula_alto}px;'></td></tr>"

# Añadir filas con números y celdas vacías
for x in range(8):
    mensaje += "<tr>"
    # Añadir número a la izquierda
    mensaje += (
        f"<td style='background-color: orange; width: {celula_ancho}px; height: {celula_alto}px;'>"
        + str(8 - x)
        + "</td>"
    )
    # Añadir celdas vacías
    for y in range(8):
        color_fondo = "white" if (x + y) % 2 == 0 else "grey"
        # Verificar si esta es la posición correspondiente a ejeX y ejeY y aplicar la imagen si es así
        if x == ejeX and y == ejeY:
            imagen_fondo = 'url("images/alfil.png")'  # Cambiar la ruta por la ruta real de tu imagen
        elif abs(abs(x) - abs(ejeX)) == abs(abs(y) - abs(ejeY)):
            imagen_fondo = 'url("images/alfilsemitransparente.png")'  # Cambiar la ruta por la ruta real de tu imagen
        else:
            imagen_fondo = "none"  # Sin imagen de fondo
        mensaje += f"<td style='background-image: {imagen_fondo}; background-color: {color_fondo}; background-size: cover; width: {celula_ancho}px; height: {celula_alto}px;'></td>"
    # Añadir número a la derecha
    mensaje += (
        f"<td style='background-color: orange; width: {celula_ancho}px; height: {celula_alto}px;'>"
        + str(8 - x)
        + "</td>"
    )
    mensaje += "</tr>"

# Añadir fila de letras a la izquierda
mensaje += "<tr><td style='width: {celula_ancho}px; height: {celula_alto}px;'></td>"
for y in range(8):
    mensaje += (
        f"<td style='background-color: yellow; width: {celula_ancho}px; height: {celula_alto}px;'>"
        + chr(97 + y)
        + "</td>"
    )
mensaje += f"<td style='width: {celula_ancho}px; height: {celula_alto}px;'></td></tr>"

mensaje += "</table>"

print(mensaje)
