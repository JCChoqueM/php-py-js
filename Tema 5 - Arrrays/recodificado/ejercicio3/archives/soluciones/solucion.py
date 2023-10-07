"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import random

NUMERO = []
CONTADOR = 0
MENSAJE = ""
for _ in range(0, 6, 1):
    ALEATORIO = random.randint(1, 100)
    NUMERO.append(ALEATORIO)
MAX = NUMERO[0]
MIN = NUMERO[0]
for elemento in NUMERO:
    if elemento > MAX:
        MAX = elemento
    if elemento < MIN:
        MIN = elemento
MENSAJE += "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>"
for contador, valor_numero in enumerate(NUMERO):
    DESCRIPCION = valor_numero
    if MAX == MIN:
        DESCRIPCION = f"{valor_numero} max y min"
    elif valor_numero == MAX:
        DESCRIPCION = f"{valor_numero} maximo"
    elif valor_numero == MIN:
        DESCRIPCION = f"{valor_numero} minimo"

    MENSAJE += f"<tr><td>{contador}</td><td>{DESCRIPCION}</td></tr>"

MENSAJE += "</table>"

print(f"{MENSAJE}")

