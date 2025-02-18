import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from siguiente_primo import siguiente_primo


def imprimir_siguiente_primo(input1):
    verde = "color: darkgreen;"
    rojo = "color: red;"
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
    elif estado == "1":
        input1 = int(input1)
        color = verde if input1 >= 0 else rojo
        mensaje_error = "<span>"
        if input1 > 1:
            mensaje_error += (
                f"El numero ingresado es: <span style='{verde}'>{input1}</span>.<br>"
                f"El siguiente numero primo es: <span style='{verde}'>{siguiente_primo(input1)}</span>."
            )
        else:
            mensaje_error += (
                f"El numero ingresado es: <span style='{color}'>{input1}</span>.<br>"
                f"Por definicion, el siguiente numero primo es: <span style='{verde}'>2</span>."
            )
        mensaje_error += "</span>"
    return mensaje_error
