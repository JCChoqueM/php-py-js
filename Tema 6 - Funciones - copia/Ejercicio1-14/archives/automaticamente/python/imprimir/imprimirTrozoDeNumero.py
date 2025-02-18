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
from crearTabla import crearTablaTrozo
from trozoDeNumero import trozoDeNumero


def imprimir_trozo_de_numero(valor, valor2, valor3):
    centrar = "style='text-align: center;'"

    mensaje_error = ""

    try:
        valor = int(valor)
        estado1 = "1"
    except ValueError:
        valor = 0
        estado1 = "0"

    try:
        valor2 = int(valor2)
        estado2 = "1"
    except ValueError:
        valor2 = 0
        estado2 = "0"

    try:
        valor3 = int(valor3)
        estado3 = "1"
    except ValueError:
        valor3 = 0
        estado3 = "0"

    estado = estado1 + estado2 + estado3

    digitos_totales = digitos(valor) - 1
    estado2 = ("N" if valor2 < 0 else "F" if valor2 > digitos_totales else "I") + (
        "N" if valor3 < 0 else "F" if valor3 > digitos_totales else "I"
    )
    if estado == "000":
        mensaje_error = "Por favor, ingrese números en todos los campos."
    elif estado == "100":
        mensaje_error = "Llene los campos 2 y 3."
    elif estado == "010":
        mensaje_error = "Llene los campos 1 y 3."
    elif estado == "001":
        mensaje_error = "Llene los campos 1 y 2."
    elif estado == "011":
        mensaje_error = "Llene el campo 1."
    elif estado == "101":
        mensaje_error = "Llene el campo 2."
    elif estado == "110":
        mensaje_error = "Llene el campo 3."
    elif estado == "111":
        mensaje_error += f"<span {centrar}>"
        mensaje_error += crearTablaTrozo(abs(valor), 0)
        if estado2 == "NN":
            mensaje_error += (
                f"Inicial ({valor2}) y Final ({valor3}) no pueden ser negativos"
            )
        elif estado2 == "NI":
            mensaje_error += f"Inicial ({valor2}) no puede ser negativo"
        elif estado2 == "IN":
            mensaje_error += f"Final ({valor3}) no puede ser negativo"
        elif estado2 == "FI":
            mensaje_error += (
                f"Inicial ({valor2}) no puede ser mayor que ({digitos_totales})"
            )
        elif estado2 == "IF":
            mensaje_error += (
                f"Final ({valor3}) no puede ser mayor que ({digitos_totales})"
            )

        elif estado2 == "FF":
            mensaje_error += f"Inicial ({valor2}) y Final ({valor3}) no puede ser mayor que ({digitos_totales})"
        elif estado2 == "FN":
            mensaje_error += f"Inicial ({valor2}) no puede ser mayor que ({digitos_totales}) y Final ({valor3}) no puede ser negativo."
        elif estado2 == "NF":
            mensaje_error += f"Inicial ({valor2}) no puede ser negativo y Final ({valor3}) no puede ser mayor que ({digitos_totales})."
        elif estado2 == "II":
            if valor2 >= 0 and valor2 <= digitos_totales:
                if valor3 >= valor2 and valor3 <= digitos_totales:
                    mensaje_error = f"<span {centrar}>"
                    mensaje_error += crearTablaTrozo(abs(valor), 0, valor2, valor3)
                    mensaje_error += trozoDeNumero(valor, valor2, valor3)
                    mensaje_error += "</span>"
                else:
                    mensaje_error += (
                        f"Inicial ({valor2}) no puede ser mayor que Final ({valor3})"
                    )

            else:
                mensaje_error += (
                    f"Inicial ({valor2}) no está en el rango permitido.(revisar...)"
                )
        else:
            mensaje_error = "revisame algo paso"
        mensaje_error += "</span>"

    return mensaje_error
