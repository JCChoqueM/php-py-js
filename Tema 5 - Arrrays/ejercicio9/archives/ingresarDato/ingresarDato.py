import sys
import json
from math import sqrt

# Verificar si se proporciona al menos un argumento al ejecutar el script
if len(sys.argv) > 1:
    # Cargar el JSON proporcionado como argumento y inicializar variables
    NUMERO = json.loads(sys.argv[1])
    MENSAJE = ""
    COLORCAMBIO1 = "background-COLOR: #2EFE64; COLOR:black"
    COLORCAMBIO2 = "background-COLOR: #FE2E2E; COLOR:black"
    COLORNEGATIVO = "background-COLOR: pink; COLOR:black"
    auxPri = []
    auxNoPri = []
    aux = []
    auxOrde = []
    NEGATIVO = 0

    # Función que determina si un número es primo
    def es_primo(numero2):
        if numero2 < 2:
            return False
        if numero2 in (2, 3):
            return True
        if numero2 % 2 == 0:
            return False
        for i in range(2, int(sqrt(numero2)) + 1):
            if numero2 % i == 0:
                return False
        return True

    # Contar números negativos en el array
    for elemento in NUMERO:
        if elemento < 0:
            NEGATIVO += 1

    # Separar números primos y no primos en arrays auxiliares
    for elemento in NUMERO:
        if es_primo(elemento):
            auxPri.append(elemento)
        else:
            auxNoPri.append(elemento)

    # Combinar arrays de primos y no primos
    aux = auxPri + auxNoPri

    # Ordenar arrays de primos y no primos
    auxPri.sort()
    auxNoPri.sort()

    # Combinar arrays ordenados de primos y no primos
    auxOrde = auxPri + auxNoPri

    # Construir la tabla HTML con los resultados
    MENSAJE = "<table border='1' >"
    filas = [
        ["Indice", list(range(len(NUMERO)))],
        ["Matriz", NUMERO],
        ["Aux", aux],
        ["Ordenado", auxOrde],
    ]

    for fila in filas:
        TITULO = fila[0]
        datos = fila[1]
        MENSAJE += "<tr>"
        MENSAJE += f"<th>{TITULO}</th>"

        if TITULO != "Indice":
            # Construir filas de la tabla con colores según ciertas condiciones
            for elemento in datos:
                if elemento < 0:
                    COLOR = COLORNEGATIVO
                else:
                    COLOR = COLORCAMBIO1 if es_primo(elemento) else COLORCAMBIO2
                MENSAJE += f"<td style='{COLOR}'>{elemento}</td>"
        else:
            # Mostrar índices en la primera fila
            for elemento in datos:
                MENSAJE += f"<td>{elemento}</td>"

        MENSAJE += "</tr>"

    MENSAJE += "</table>"

    # Información adicional sobre el array
    MENSAJE += "El array tiene:<br>"
    PLURALPRI = "numeros primos, <br>" if len(auxPri) != 1 else "numero primo, <br>"
    PLURALNOPRI = (
        "numeros no primos,<br>" if len(auxNoPri) != 1 else "numero no primo,<br>"
    )
    PLURALNEGATIVO = "numeros negativos." if NEGATIVO != 1 else "numero negativo."
    MENSAJE += f"{len(auxPri)} {PLURALPRI}"
    MENSAJE += f"{len(auxNoPri)} {PLURALNOPRI}"
    MENSAJE += f"{NEGATIVO} {PLURALNEGATIVO}"

    # Imprimir el mensaje
    print(f"{MENSAJE}")


import sys
import json

# Verificar que se proporcionen al menos dos argumentos
if len(sys.argv) >= 3:
    # Cargar los JSON proporcionados como argumentos y inicializar variables
    NUMERO1 = json.loads(sys.argv[1])
    NUMERO2 = json.loads(sys.argv[2])

    # Aquí puedes realizar operaciones con las dos arrays (NUMERO1 y NUMERO2)
    # Por ejemplo, imprimir las arrays o realizar algún cálculo

    print("Array 1:", NUMERO1)
    print("Array 2:", NUMERO2)
else:
    print("Error: Se esperan al menos dos argumentos JSON.")
