import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from digitos import digitos


def imprimir_digitos(input1):
    rojo = "color: red;"
    verde = "color: darkgreen;"
    mensaje_error = ""

    try:
        input1 = int(input1)
        estado = "1"
    except ValueError:
        estado = "0"

    if estado == "0":
        mensaje_error = (
            "El campo esta vacio o no es un numero. Por favor, ingrese numero(s)."
        )
    elif estado == "1":
        color = verde if input1 >= 0 else rojo
        mensaje_error = "<span>"
        if input1 >= 0:
            mensaje_error += f"El numero: <span style='{color}'>{input1}</span>.<br>tiene: <span style='{color}'>{digitos(input1)} digitos</span>"
        else:
            mensaje_error += f"El numero: <span style='{color}'>{input1}</span>.<br>tiene: <span style='{color}'>{digitos(abs(input1))} digitos</span>"
        mensaje_error += "</span>"
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error
