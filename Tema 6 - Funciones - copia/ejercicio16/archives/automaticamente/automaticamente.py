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


def generar_capicua(limite):
    """
    Implementa el algoritmo de la criba de Eratóstenes
    para encontrar todos los números primos hasta un límite dado.

    Args:
        limite (int): El número máximo hasta el cual buscar números primos.

    Returns:
        list: Una lista de booleanos donde True indica que el índice es un número primo.
    """
    mensaje = []

    # Generar capicúas de 1 a 5 dígitos
    # 1 dígito
    for i in range(1, 10):
        if i <= limite:
            mensaje.append(i)

    # 2 dígitos
    for i in range(1, 10):
        capi_cua = int(f"{i}{i}")
        if capi_cua <= limite:
            mensaje.append(capi_cua)

    # 3 dígitos
    for i in range(1, 10):
        for j in range(0, 10):
            capi_cua = int(f"{i}{j}{i}")
            if capi_cua <= limite:
                mensaje.append(capi_cua)

    # 4 dígitos
    for i in range(1, 10):
        for j in range(0, 10):
            capi_cua = int(f"{i}{j}{j}{i}")
            if capi_cua <= limite:
                mensaje.append(capi_cua)

    # 5 dígitos
    for i in range(1, 10):
        for j in range(0, 10):
            for k in range(0, 10):
                capi_cua = int(f"{i}{j}{k}{j}{i}")
                if capi_cua <= limite:
                    mensaje.append(capi_cua)

    return mensaje


# Ejemplo de uso:


def imprimir_tabla(array, columnas=6):
    """
    Genera una tabla HTML a partir de un array dado.

    Args:
        array (list): Lista de elementos a mostrar en la tabla.
        columnas (int, optional): Número de columnas en la tabla. Por defecto es 10.
    """
    html = """
<style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #333;
            padding: 5px;
            text-align: center;
            font-size: 18px;
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
    </style>
    """
    html += "<table>"
    contador = 0
    html += "<tr>"

    for valor in array:
        html += f"<td>{valor}</td>"
        contador += 1

        if contador % columnas == 0:
            html += "</tr><tr>"

    html += "</tr>"
    html += "</table>"

    return html


LIMITE_NUMERO = int(datos[0])
MENSAJE = ""
if LIMITE_NUMERO > 1 and LIMITE_NUMERO <= 99999:

    # Imprimir el resultado en la consola (para verificar)
    MENSAJE = imprimir_tabla(generar_capicua(LIMITE_NUMERO))
else:
    MENSAJE = "El numero debe estar entre 1 y 99999"
print(MENSAJE)
