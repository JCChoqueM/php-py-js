import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from pegaPorDetras import pegaPorDetras
from digitos import digitos


def imprimir_pega_por_detras(input1, input2):
    centrar = "style='text-align: center;'"
    rojo = "style='color: red;'"
    verde = "style='color: darkgreen;'"
    negro = "style='color: black;'"
    morado = "style='color: purple;'"
    naranja = "style='color: brown'"

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

    n_digito = digitos(input2)

    if estado == "00":
        mensaje_error = "Ambos campos están vacios. Por favor, ingrese numeros."
    elif estado == "01":
        mensaje_error = "El campo 1 esta vacio.<br>"
        mensaje_error += f"<span {rojo}>"
        if input2 < 0:
            mensaje_error += "El campo 2 no puede ser negativo.<br>"
        if n_digito > 1:
            mensaje_error += "El campo 2 no puede tener mas de 1 dígito."
        mensaje_error += "</span>"
    elif estado == "10":
        mensaje_error = "El campo 2 esta vacio."
    elif estado == "11":
        if input2 >= 0 and n_digito == 1:
            mensaje_error += f"<span {centrar}>"
            mensaje_error += f"<span {morado}>{input1}</span> con <span {naranja}>{input2}</span> pegado por detras:<br>"
            mensaje_error += f"<span {verde}>"
            if input1 == 0:
                mensaje_error += (
                    f"<span {negro}>Numeral:</span> {pegaPorDetras(input1, input2)}"
                )
                mensaje_error += f"<br><span {negro}>Literal:</span> {input1}{input2}"
            else:
                mensaje_error += f"{pegaPorDetras(input1, input2)}"
            mensaje_error += "</span></span>"
        else:
            mensaje_error += f"<span {rojo}>"
            if n_digito > 1:
                mensaje_error += "El campo 2 no puede tener mas de 1 digito.<br>"
            if input2 < 0:
                mensaje_error += f"El campo 2 no puede ser negativo:<span {negro}> {input1}{input2}</span>"
            mensaje_error += "</span>"
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error
