""" importan math para su uso
"""

import math
import sys


# Cadena inicial
cadena = sys.argv[1] if len(sys.argv) > 1 else ""

# Verificar si la cadena está vacía después de eliminar los corchetes y espacios
if not cadena.strip("[] "):
    datos = ["", ""]
else:
    # Eliminar los corchetes y espacios al principio y al final
    cadena_limpia = cadena.strip("[] ")

    # Dividir la cadena en elementos separados por coma
    datos_con_espacios = cadena_limpia.split(",")

    # Eliminar espacios adicionales de cada elemento
    datos = [dato.strip() for dato in datos_con_espacios]

    # Asegurar que la lista tenga al menos dos elementos
    while len(datos) < 1:
        datos.append("")


def transformar(divisor):
    suma = 0
    i = 0
    while divisor > 0:
        suma += (divisor % 10) * 2**i
        divisor = divisor // 10
        i += 1
    return suma


def verificar_binario(divisor):
    while divisor > 0:
        if divisor % 10 not in (0, 1):
            return False
        divisor = divisor // 10
    return True


def imprimir_tabla(array):
    html = "<style>\
                table {\
                    width: 100%;\
                    border-collapse: collapse;\
                }\
                th, td {\
                    border: 1px solid #333;\
                    padding: 20px;\
                    text-align: center;\
                    font-size: 18px;\
                    width: 350px;\
                }\
                th {\
                    background-color: #f2f2f2;\
                }\
                td {\
                    background-color: #e6e6e6;\
                }\
                tr:nth-child(even) {\
                    background-color: #f9f9f9;\
                }\
                tr:nth-child(odd) {\
                    background-color: #ffffff;\
                }\
            </style>"
    html += "<table>"
    html += "<tr>"

    for valor in array:
        html += f"<td>{valor}</td>"

    html += "</tr>"
    html += "</table>"

    return html



def procesar():
    datos = request.get_json()

    if not datos or not isinstance(datos[0], int):
        mensaje = [
            "El campo está vacío o no es un número. Por favor, ingrese número(s)."
        ]
    else:
        numero = abs(datos[0])
        mensaje = []

        if verificar_binario(numero):
            mensaje.append(
                f"El numero binario {numero} es igual a :<br>{transformar(numero)} en base Decimal."
            )
        else:
            mensaje.append("El numero ingresado no es Binario")

    return imprimir_tabla(mensaje)


LIMITE_NUMERO = int(datos[0])
MENSAJE = ""
if LIMITE_NUMERO > 1 and LIMITE_NUMERO <= 99999:

    # Imprimir el resultado en la consola (para verificar)
    MENSAJE = imprimir_tabla(generar_capicua(LIMITE_NUMERO))
else:
    MENSAJE = "El numero debe estar entre 1 y 99999"
print(MENSAJE)
