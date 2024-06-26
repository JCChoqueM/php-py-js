import os
import sys


# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from potencia import potencia


def imprimir_potencia(base, exponente):
    centrar = "text-align: center;"
    rojo = "color: red;"
    verde = "color: darkgreen;"
    letra = "font-size: 20px; font-weight: bold"
    estado = ""
    mensaje_error = ""
    try:
        base = int(base)
        estado = "1"
        try:
            exponente = int(exponente)
            estado += "1"
        except ValueError:
            exponente = 0
            estado += "0"  # Agrega "1" si ambos son números válidos
    except ValueError:
        base = 0
        estado = "0"
        try:
            exponente = int(exponente)
            estado += "1"
        except ValueError:
            exponente = 0
            estado += "0"

    if estado == "00":
        mensaje_error = "Ambos campos estan vacios. Por favor, ingrese numeros."
    elif estado == "01":
        mensaje_error = "El campo base esta vacio."
    elif estado == "10":
        mensaje_error = "El campo exponente esta vacio."
    elif estado == "11":
        base = int(base)
        exponente = int(exponente)
        if exponente == 0:
            if base == 0:
                mensaje_error = f"<span style='{centrar}'>({base})<sup>{exponente}</sup> tiene 2 valores posibles: 1 o indefinido</span>"
            else:
                mensaje_error = f"<span style='{centrar}'>({base})<sup>{exponente}</sup> resultado es: 1</span>"
        elif exponente < 0:
            if base == 0:
                mensaje_error = f"<span style='{centrar}'>({base})<sup>{exponente}</sup> resultado es:<br><br>\
                <math xmlns='http://www.w3.org/1998/Math/MathML'>\
                    <mfrac style='{letra}'>\
                        <mi>1</mi>\
                        <mi><span>\
                                ({base})<sup>{abs(exponente)}</sup>\
                            </span></mi>\
                    </mfrac>\
                </math> =\
                <math xmlns='http://www.w3.org/1998/Math/MathML'>\
                    <mfrac style='{letra}'>\
                        <mi>1</mi>\
                        <mi><span>({base})</span></mi>\
                    </mfrac>\
                </math> = Indefinido\
                </span>"
            else:
                mensaje_error = f"<span style='{centrar}'>({base})<sup>{exponente}</sup> resultado es:<br><br>\
                <math xmlns='http://www.w3.org/1998/Math/MathML'>\
                    <mfrac style='{letra}'>\
                        <mi>1</mi>\
                        <mi><span>\
                                ({base})<sup>{abs(exponente)}</sup>\
                            </span></mi>\
                    </mfrac>\
                </math> =\
                <math xmlns='http://www.w3.org/1998/Math/MathML'>\
                    <mfrac style='{letra}'>\
                        <mi>1</mi>\
                        <mi><span>{pow(base, abs(exponente))}</span></mi>\
                    </mfrac>\
                </math>\
                </span>"
        else:
            if exponente == 1:
                mensaje_error = f"<span style='{centrar}'>({base})<sup>{exponente}</sup> El resultado es {base}</span>"
            elif exponente > 1:
                mensaje_error = f"<span style='{centrar}'>({base})<sup>{exponente}</sup> resultado es: {potencia(base, exponente)}</span>"
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error
