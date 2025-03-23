"""
El módulo 'sys' se importa para acceder a 
los argumentos de la línea de comandos y otras funcionalidades del sistema.
"""

import sys


def transformar(divisor):
    """
    Convierte un número binario a decimal.

    :param divisor: Número binario como entero.
    :return: Valor decimal equivalente.
    """
    suma = 0
    i = 0
    while divisor > 0:
        if divisor % 2 == 1:
            suma += 10**i
        divisor = divisor // 2
        i += 1
    return suma


def verificar_decimal(divisor):
    """
    Verifica si un número es decimal.

    :param divisor: Número como entero.
    :return: True si el número es decimal, False en caso contrario.
    """
    while divisor > 0:
        if divisor % 10 >= 0 and divisor % 10 <= 9:
            divisor = divisor // 10
        else:
            return False
    return True


def imprimir_tabla(array):
    """
    Genera una tabla HTML a partir de una lista de mensajes.

    :param array: Lista de mensajes a imprimir en la tabla.
    :return: Cadena de HTML que representa la tabla.
    """
    html = """<style>
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #333;
                    padding: 20px;
                    text-align: center;
                    font-size: 18px;
                    width: 350px;
                }
                th {
                    background-color: #f2f2f2;
                }
                td {
                    background-color: #e6e6e6;
                }
                tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                tr:nth-child(odd) {
                    background-color: #ffffff;
                }
            </style>"""
    html += "<table>"
    html += "<tr>"

    for valor in array:
        html += f"<td>{valor}</td>"

    html += "</tr>"
    html += "</table>"

    return html


# Obtener la cadena de argumentos de la línea de comandos
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
    if len(datos) < 1:
        datos.append("")


try:
    datos[0] = int(datos[0])
    ESTADO = "1"  # Suponiendo que si se puede convertir a entero, el ESTADO sea "1"
except ValueError:
    datos[0] = 0
    ESTADO = "0"

if ESTADO == "0":
    mensaje = ["El campo esta vacio o no es un numero. Por favor, ingrese numero(s)."]
elif ESTADO == "1":
    numero = abs(datos[0])
    mensaje = []

    if verificar_decimal(numero):
        mensaje.append(
            f"El numero Decimal {numero} es igual a :<br>{transformar(numero)} en base Binari@."
        )
    else:
        mensaje.append(f"El numero {numero} no es Decimal.")
else:
    mensaje = ["Error desconocido. Por favor, revise las entradas."]

print(imprimir_tabla(mensaje))
