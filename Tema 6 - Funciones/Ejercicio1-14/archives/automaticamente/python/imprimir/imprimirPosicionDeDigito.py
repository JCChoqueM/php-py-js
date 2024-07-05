import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from posicionDeDigito import posicion_de_digito_izquierda_derecha
from posicionDeDigito import posicion_de_digito_derecha_izquierda
from crearTabla import crearTabla
from crearTabla import crearTablaReves


def imprimirPosicionDeDigito(input1, input2):
    centrar = "style='text-align: center;'"
    rojo = "style='color: red;'"
    azul = "style='color: blue;'"
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

    if estado == "00":
        mensajeError = "Ambos campos están vacíos. Por favor, ingrese números."
    elif estado == "01":
        mensajeError = "El campo 1 está vacío."
    elif estado == "10":
        mensajeError = "El campo 2 está vacío."
    elif estado == "11":
        input1 = int(input1)
        input2 = int(input2)

        if input2 > 9 or input2 < 0:
            mensajeError += f"<span {rojo}>Número ingresado {input1}.<br> Solo se permiten números positivos de 1 dígito: {input2} no es válido para la búsqueda</span>."
        else:
            IzqDer = posicion_de_digito_izquierda_derecha(input1, input2)
            posicionIzqDer = IzqDer if isinstance(IzqDer, int) else "-1"
            DerIzq = posicion_de_digito_derecha_izquierda(input1, input2)
            posicionDerIzq = DerIzq if isinstance(DerIzq, int) else "-1"

            mensajeError = f"<br><div {centrar}><br>"
            mensajeError += f"<span {azul}>"
            mensajeError += f"Izquierda a Derecha<br>"
            mensajeError += f"El número '{input2}' está en la posición: '{IzqDer}'.<br>"
            mensajeError += crearTabla(abs(input1), 0, posicionIzqDer)

            mensajeError += "</span>"

            mensajeError += f"<span {rojo}>"
            mensajeError += f" Derecha a Izquierda<br>"
            mensajeError += f"El número '{input2}' está en la posición: '{DerIzq}'.<br>"
            mensajeError += crearTablaReves(abs(input1), 0, posicionDerIzq)
            mensajeError += "</span>"
            mensajeError += "</div>"
    else:
        mensajeError = "Error desconocido. Por favor, revise las entradas."

    return mensajeError
