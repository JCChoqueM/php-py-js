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


def es_capicua(numero):
    numero_original = numero
    numero = abs(numero)
    volteado = 0

    while numero > 0:
        digito = numero % 10
        volteado = volteado * 10 + digito
        numero = numero // 10

    if abs(numero_original) == volteado:
        return f"El número \033[92m{abs(numero_original)}\033[0m es capicúa"
    else:
        return f"El número \033[91m{abs(numero_original)}\033[0m NO es capicúa"


def imprimir_es_capicua(input1):
    mensaje_error = ""
    estado = "0" if not isinstance(input1, (int, float)) else "1"
    es_valido = (0 <= input1 <= 9) or (-9 <= input1 <= -1)

    if estado == "0":
        mensaje_error = (
            "El campo está vacío o no es un número. Por favor, ingrese número(s)."
        )
    elif estado == "1":
        if es_valido:
            if input1 >= 0:
                mensaje_error = f"<span>El numero <span style='color: green'>{input1}</span> es un palíndromo.</span>"
            else:
                mensaje_error = (
                    f"<span>El número <span style='color: red'>{input1}</span> "
                    f"es negativo<br>Al ignorar el signo:<br> "
                    f"<span style='color: green'>{abs(input1)} </span>es un palíndromo.</span>"
                )
        else:
            if input1 >= 0:
                mensaje_error = f"<span>{es_capicua(input1)}</span>"
            else:
                mensaje_error = (
                    f"<span>El número <span style='color: red'>{input1}</span> "
                    f"es negativo.<br> Al ignorar el signo:<br> "
                    f"{es_capicua(input1)}</span>"
                )
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error


# Ejemplo de uso
print(imprimir_es_capicua(12321))
print(imprimir_es_capicua(-121))
print(imprimir_es_capicua("texto"))
