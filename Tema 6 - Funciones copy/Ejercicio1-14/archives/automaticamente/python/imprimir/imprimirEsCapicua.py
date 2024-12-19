import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from es_capicua import es_capicua


def imprimir_es_capicua(input1):

    mensaje_error = ""
    try:
        input1 = int(input1)
        estado = "1"  # Suponiendo que si se puede convertir a entero o float, el estado sea "1"
    except ValueError:
        input1 = 0
        estado = "0"

    es_valido = (0 <= input1 <= 9) or (-9 <= input1 <= -1)

    if estado == "0":
        mensaje_error = (
            "El campo esta vacio o no es un numero. Por favor, ingrese numero(s)."
        )
    elif estado == "1":
        if es_valido:
            if input1 >= 0:
                mensaje_error = f"<span>El numero <span style='color: green'>{input1}</span> es un palindromo.</span>"
            else:
                mensaje_error = (
                    f"<span>El numero <span style='color: red'>{input1}</span> "
                    f"es negativo<br>Al ignorar el signo:<br> "
                    f"<span style='color: green'>{abs(input1)} </span>es un palindromo.</span>"
                )
        else:
            if input1 >= 0:
                mensaje_error = f"<span>{es_capicua(input1)}</span>"
            else:
                mensaje_error = (
                    f"<span>El numero <span style='color: red'>{input1}</span> "
                    f"es negativo.<br> Al ignorar el signo:<br> "
                    f"{es_capicua(input1)}</span>"
                )
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error
