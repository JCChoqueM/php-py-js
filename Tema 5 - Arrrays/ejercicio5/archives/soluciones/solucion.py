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
LONGITUD = len(NUMERO)
AUX = []
AUX.insert(0, NUMERO[LONGITUD - 1])
MENSAJE += "<table border='1'><tr><th>Indice</th><th>Numero</th><th>ROTAR</th></tr>"
for contador in range(LONGITUD - 1):
    AUX.insert(contador + 1, NUMERO[contador])
for contador in range(LONGITUD):
    DESCRIPCION = NUMERO[contador]
    ROTAR = AUX[contador]
    MENSAJE += f"<tr><td>{contador}</td><td>{DESCRIPCION}</td><td>{ROTAR}</td></tr>"

MENSAJE += "</table>"

print(f"{MENSAJE}")
