import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)


# Importar el módulo uno.py
from voltea import voltea


def imprimir_voltea(input1):
    rojo = "color: red;"
    verde = "color: darkgreen;"
    mensaje_error = ""

    try:
        input1 = int(input1)
        estado = "1"  # Suponiendo que si se puede convertir a entero o float, el estado sea "1"
    except ValueError:
        input1 = 0
        estado = "0"

    if estado == "0":
        mensaje_error = (
            "El campo esta vacio o no es un numero. Por favor, ingrese numero(s)."
        )
    else:
        input1 = int(input1)  # Asegurarse de que input1 es un entero
        voltea_resultado = voltea(input1)
        color = verde if input1 >= 0 else rojo
        mensaje_error = "<span>"
        mensaje_error += (
            f"Numero Ingresado: <span style='{color}'>{input1}</span>.<br>"
            f"volteado literal: <span style='{color}'>{voltea_resultado[0]}</span><br>"
            f"volteado numeral: <span style='{color}'>{voltea_resultado[1]}</span>"
        )
        mensaje_error += "</span>"

    return mensaje_error
