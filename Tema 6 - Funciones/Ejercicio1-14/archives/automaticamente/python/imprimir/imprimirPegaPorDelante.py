import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from pegaPorDelante import pegaPorDelante
from digitos import digitos


def imprimir_pega_por_delante(input1, input2):
    centrar = "text-align: center;"
    rojo = "color: red;"
    verde = "color: darkgreen;"
    negro = "color: black;"
    morado = "color: purple;"
    naranja = "color: brown;"
    mensajeError = ""
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

    nDigito = digitos(input2)
    if estado == "00":
        mensajeError = "Ambos campos estan vacios. Por favor, ingrese numeros."
    elif estado == "01":
        mensajeError = "El campo 1 esta vacio.<br>"
        mensajeError += f"<span style='{rojo}'>"
        if nDigito > 1:
            mensajeError += "El campo 2 no puede tener mas de 1 digito."
        mensajeError += "</span>"
    elif estado == "10":
        mensajeError = "El campo 2 esta vacio."
    elif estado == "11":
        if nDigito == 1:
            mensajeError += f"<span style='{centrar}'>"
            mensajeError += f"<span style='{morado}'>{input1}</span> con <span style='{naranja}'>{input2}</span> pegado por delante:<br>"
            mensajeError += f"<span style='{verde}'>"
            if input1 < 0:
                mensajeError = "<span>"
                mensajeError += f"<span style='{rojo}'>El pegado de {input2} delante de: {input1} tiene distintas soluciones</span>"
                if input2 == 0:
                    mensajeError += "<span>"
                    mensajeError += f"<br>Numeral: <span style='{rojo}'>{input1}</span>"
                    mensajeError += f"<br>Literal:  <span style='{rojo}'>-{input2}{abs(input1)}</span>"
                    mensajeError += (
                        f"<br>Literal: <span style='{rojo}'>{input2}{input1}</span>"
                    )
                    mensajeError += "</span>"
                elif input2 > 0:
                    mensajeError += "<span>"
                    mensajeError += f"<br>Numeral:  <span style='{rojo}'>-{input2}{abs(input1)}</span>"
                    mensajeError += (
                        f"<br>Literal: <span style='{rojo}'>{input2}{input1}</span>"
                    )
                    mensajeError += "</span>"
                elif input2 < 0:
                    mensajeError += "<span>"
                    mensajeError += (
                        f"<br>Literal: <span style='{rojo}'>{input2}{input1}</span>"
                    )
                    mensajeError += f"<br>Literal:  <span style='{rojo}'>-{input2}{abs(input1)}</span>"
                    mensajeError += "</span>"
                mensajeError += "</span>"
            else:
                if input2 == 0:
                    mensajeError += f"<span style='{negro}'>Numeral:</span> {pegaPorDelante(input1, input2)}"
                    mensajeError += (
                        f"<br><span style='{negro}'>Literal:</span> {input2}{input1}"
                    )
                else:
                    mensajeError += f"caso: {pegaPorDelante(input1, input2)}"
            mensajeError += "</span>"
            mensajeError += "</span>"
        else:
            mensajeError += f"<span style='{rojo}'>"
            if nDigito > 1:
                mensajeError += "El campo 2 no puede tener mas de 1 digito.<br>"
            mensajeError += "</span>"
    else:
        mensajeError = "Error desconocido. Por favor, revise las entradas."

    return mensajeError
