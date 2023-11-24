"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import random
from math import sqrt

# Inicializar variables
NUMERO = []  # Lista para almacenar números aleatorios
for _ in range(0, 6, 1):
    ALEATORIO = random.randint(-9, 100)
    NUMERO.append(ALEATORIO)

CONTADOR = 0
MENSAJE = ""
COLORCAMBIO1 = "background-COLOR: #2EFE64; COLOR:black"
COLORCAMBIO2 = "background-COLOR: #FE2E2E; COLOR:black"
COLORNEGATIVO = "background-COLOR: pink; COLOR:black"
auxPri = []  # Lista para almacenar números primos
auxNoPri = []  # Lista para almacenar números no primos
aux = []  # Lista auxiliar para combinación de primos y no primos
auxOrde = []  # Lista para almacenar números ordenados
NEGATIVO = 0


# Función para determinar si un número es primo
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


# Contar números negativos en el array 'NUMERO'
for elemento in NUMERO:
    if elemento < 0:
        NEGATIVO += 1

# Separar números primos y no primos en listas auxiliares
for elemento in NUMERO:
    if es_primo(elemento):
        auxPri.append(elemento)
    else:
        auxNoPri.append(elemento)

# Combinar listas de primos y no primos
aux = auxPri + auxNoPri

# Ordenar listas de primos y no primos
auxPri.sort()
auxNoPri.sort()

# Combinar listas ordenadas de primos y no primos
auxOrde = auxPri + auxNoPri

# Crear una cadena con los números ingresados separados por comas
INGRESADO = ", ".join(map(str, NUMERO))
MENSAJE = f"Numeros ingresados py:<br> {INGRESADO}."

# Construir la tabla HTML
MENSAJE += "<table border='1' >"
filas = [
    ["Indice", list(range(len(NUMERO)))],
    ["Matriz", NUMERO],
    ["Aux", aux],
    ["Ordenado", auxOrde],
]

# Iterar sobre cada fila y columna para construir la tabla
for fila in filas:
    TITULO = fila[0]
    datos = fila[1]
    MENSAJE += "<tr>"
    MENSAJE += f"<th>{TITULO}</th>"

    # Mostrar datos para cada celda
    if TITULO != "Indice":
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
PLURALPRI = " numeros primos, <br>" if len(auxPri) != 1 else " numero primo, <br>"
PLURALNOPRI = (
    " numeros no primos, <br>" if len(auxNoPri) != 1 else " numero no primo, <br>"
)
PLURALNEGATIVO = (
    " numeros negativos. <br>" if NEGATIVO != 1 else " numero negativo. <br>"
)
MENSAJE += f"{len(auxPri)}{PLURALPRI}"
MENSAJE += f"{len(auxNoPri)}{PLURALNOPRI} "
MENSAJE += f"{NEGATIVO}{PLURALNEGATIVO} "

# Imprimir el mensaje
print(f"{MENSAJE}")
