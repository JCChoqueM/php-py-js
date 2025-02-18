import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)
from pegaPorDelante import pegaPorDelante
from pegaPorDetras import pegaPorDetras
from crearTabla import crearTablaPegado


def imprimir_junta_numeros(input1, input2):
    centrar = "text-align: center;"
    rojo = "color: red;"
    azul = "color: blue;"

    mensaje_error = ""
    try:
        input1 = int(input1)
        estado = "1"
    except ValueError:
        input1 = 0
        estado = "0"

    try:
        input2 = int(input2)
        estado += "1"
    except ValueError:
        input2 = 0
        estado += "0"

    estado2 = ("C" if input1 == 0 else "P" if input1 > 0 else "N") + (
        "C" if input2 == 0 else "P" if input2 > 0 else "N"
    )

    if estado == "00":
        mensaje_error = "Ambos campos estan vacios. Por favor, ingrese numeros."
    elif estado == "01":
        mensaje_error = "El campo 1 esta vacio.<br>"
    elif estado == "10":
        mensaje_error = "El campo 2 esta vacio."
    elif estado == "11":
        pegado1 = ""
        pegado2 = ""
        mensaje_error = f"<span style='{centrar}'>"
        mensaje_error += f"El pegado de los numeros <span style='{rojo}'>{input1}</span> y <span style='{azul}'>{input2}</span> es:<br>"

        if estado2 == "CC":
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Numeral: 0"
            pegado2 = f"Literal: {color(input2, 2)}{color(input1, 1)}<br>Numeral: 0"
        elif estado2 in ["CP", "PC"]:
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Numeral: {pegaPorDetras(input1, input2)}"
            pegado2 = f"Literal: {color(input2, 2)}{color(input1, 1)}<br>Numeral: {pegaPorDelante(input1, input2)}"
        elif estado2 == "CN":
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Literal: {color('-', 2)}{color(input1, 1)}{color(abs(input2), 2)}<br>Numeral: -{pegaPorDetras(input1, input2)}"
            pegado2 = f"Literal: {color(input2, 2)}{color(input1, 1)}<br>Numeral: {pegaPorDelante(input1, input2)}"
        elif estado2 == "NC":
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Numeral: {pegaPorDetras(input1, input2)}"
            pegado2 = f"Literal: {color(input2, 1)}{color(input1, 1)}<br>Literal: {color('-', 1)}{color(input2, 2)}{color(abs(input1), 1)}<br>Numeral: -{pegaPorDelante(input1, input2)}"
        elif estado2 == "PP":
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Numeral: {pegaPorDetras(input1, input2)}"
            pegado2 = f"Literal: {color(input2, 2)}{color(input1, 1)}<br>Numeral: {pegaPorDelante(input1, input2)}"
        elif estado2 == "PN":
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Numeral: -{pegaPorDetras(input1, input2)}"
            pegado2 = f"Literal: {color(input2, 2)}{color(input1, 1)}<br>Numeral: {pegaPorDelante(input1, input2)}"
        elif estado2 == "NN":
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Literal: {color('-', 2)}{color('-', 1)}{color(abs(input1), 1)}{color(abs(input2), 2)}"
            pegado2 = f"Literal: {color(input2, 2)}{color(input1, 1)}<br>Literal: {color('-', 1)}{color('-', 2)}{color(abs(input2), 2)}{color(abs(input1), 1)}"
        elif estado2 == "NP":
            pegado1 = f"Literal: {color(input1, 1)}{color(input2, 2)}<br>Numeral: {pegaPorDetras(input1, input2)}"
            pegado2 = f"Literal: {color(input2, 2)}{color(input1, 1)}<br>Numeral: -{pegaPorDelante(input1, input2)}"
        else:
            mensaje_error = "revisame algo paso"

        mensaje_error += crearTablaPegado(pegado1, pegado2)
        mensaje_error += "</span>"
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error


def color(numero, mn):
    naranja = "color: red;"
    morado = "color: blue;"
    style = naranja if mn == 1 else morado
    return f'<span style="{style}">{numero}</span>'
