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
from digitoN import digitoN
from crearTabla import crearTabla


def imprimir_DigitoN(input1, input2):
    centrar = "style='text-align: center;'"
    rojo = "style='color: red;'"
    verde = "style='color: darkgreen;'"
    azul = "style='color: blue;'"
    negro = "style='color: black;'"
    mensajeError = ""

    # Evaluación del estado de los inputs
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

    # Manejo de los casos según el estado
    if estado == "00":
        mensajeError = "Ambos campos estan vacios. Por favor, ingrese numeros."
    elif estado == "01":
        mensajeError = "El campo 1 esta vacio."
    elif estado == "10":
        mensajeError = "input 2 está vacio."
    elif estado == "11":
        nDigito = digitos(int(input1))
        print(nDigito)
        input1 = int((input1))
        input2 = int(input2)
        mensajeError = (
            f"<br><div {centrar}>El numero {input1} tiene <span {verde}> "
            + ("la posicion." if nDigito == 1 else " las siguientes posiciones.")
            + "</span> <br>"
            + crearTabla(abs(input1), 0)
            + "</div>"
        )

        # Evaluación para mostrar el dígito en la posición input2
        if input2 > nDigito - 1 or input2 < 0:
            mensajeError += (
                f"<span {rojo}>No se puede buscar la posicion {input2}</span>."
            )
        else:
            mensajeError += f"<span {azul}>El numero en la posicion {input2} es: <span {negro}>{abs(digitoN(input1, input2))}</span></span>."
    else:
        mensajeError = "Error desconocido. Por favor, revise las entradas."

    return mensajeError
