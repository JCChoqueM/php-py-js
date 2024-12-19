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


def criba_eratostenes(limite):
    """
    Implementa el algoritmo de la criba de Eratóstenes
    para encontrar todos los números primos hasta un límite dado.

    Args:
        limite (int): El número máximo hasta el cual buscar números primos.

    Returns:
        list: Una lista de booleanos donde True indica que el índice es un número primo.
    """
    numeros = [True] * (limite + 1)
    numeros[0] = numeros[1] = False  # 0 y 1 no son primos

    for n in range(2, int(math.sqrt(limite)) + 1):
        if numeros[n]:
            for i in range(n * n, limite + 1, n):
                numeros[i] = False

    return [i for i, es_primo in enumerate(numeros) if es_primo]


# Ejemplo de uso:


def imprimir_tabla(array, columnas=10):
    """
    Genera una tabla HTML a partir de un array dado.

    Args:
        array (list): Lista de elementos a mostrar en la tabla.
        columnas (int, optional): Número de columnas en la tabla. Por defecto es 10.
    """
    html = """
    <style>
        table {
            width: 75%;
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
    <table>
    """

    for i, valor in enumerate(array):
        if i % columnas == 0 and i != 0:
            html += "</tr><tr>"
        html += f"<td>{valor}</td>"

    html += "</tr></table>"
    return html


LIMITE_NUMERO = int(datos[0])
MENSAJE = ""
if LIMITE_NUMERO > 1 and LIMITE_NUMERO <= 1000:

    # Imprimir el resultado en la consola (para verificar)
    MENSAJE = imprimir_tabla(criba_eratostenes(LIMITE_NUMERO))
else:
    MENSAJE = "El numero debe estar entre 1 y 1000"
print(MENSAJE)
