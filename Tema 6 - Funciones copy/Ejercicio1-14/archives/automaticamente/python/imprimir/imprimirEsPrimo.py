import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from es_primo import es_primo


def imprimir_es_primo(input1):
    rojo = "style='color: red;'"
    verde = "style='color: darkgreen;'"
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
        input1 = int(input1)  # Asegurarse de que input1 sea un entero
        abs_input1 = abs(input1)
        es_primo_input1 = es_primo(input1)
        es_primo_abs_input1 = es_primo(abs_input1)
        color = verde if es_primo_abs_input1 else rojo

        mensaje_error = "<span>"
        if input1 > 1:
            mensaje_error += f"El numero <span {color}>{input1}</span> {'es primo' if es_primo_input1 else 'NO es primo'}"
        else:
            mensaje_error += f"En matematicas, un numero primo es un numero natural mayor que <span {verde}>1</span>, el numero <span {rojo}>{input1}</span> no es primo."
            if input1 != 0 and input1 != 1:
                mensaje_error += f"<br><br><span {color}>Ignorando el signo:</span><br>"
                mensaje_error += f"El numero <span {color}>{abs_input1}</span> {'es primo' if es_primo_abs_input1 else 'NO es primo'}"
        mensaje_error += "</span>"
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error
