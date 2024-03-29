"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

NUMERO = json.loads(sys.argv[1])
MENSAJE = ""
COLORCAMBIO1 = "background-color: yellow; color:black"
COLORCAMBIO2 = "background-color: orange; color:black"
aux = []
aux2 = []
auxpar = []
auximpar = []

for indice, elemento in enumerate(NUMERO):
    if abs(elemento) % 2 == 0:
        aux.append(elemento)
        auxpar.append(elemento)

for indice, elemento in enumerate(NUMERO):
    if abs(elemento) % 2 == 0:
        pass
    else:
        aux.append(elemento)
        auximpar.append(elemento)

auxpar.sort()
auximpar.sort()
ordenado = auxpar + auximpar
MENSAJE = "<table border='1' >"

# SECTION - fila indice
MENSAJE += "<tr>"
MENSAJE += "<th >Índice</th>"
for indice, _ in enumerate(NUMERO):
    MENSAJE += f"<th> {indice} </th>"
MENSAJE += "</tr>"
#!SECTION fin fila indice

# SECTION - inicio fila matriz
MENSAJE += "<tr>"
MENSAJE += "<td >Matriz</td>"
for _, elemento in enumerate(NUMERO):
    if elemento % 2 == 0:
        MENSAJE += f"<td style='{COLORCAMBIO1}'> {elemento}</td>"
    else:
        MENSAJE += f"<td style='{COLORCAMBIO2}'> {elemento}</td>"
MENSAJE += "</tr>"
#!SECTION fin fila matriz

# SECTION - inicio fila aux
MENSAJE += "<tr>"
MENSAJE += "<td >Aux</td>"
for indice, elemento in enumerate(aux):
    if elemento % 2 == 0:
        MENSAJE += f"<td style='{COLORCAMBIO1}'> {elemento} </td>"
    else:
        MENSAJE += f"<td style='{COLORCAMBIO2}'> {elemento} </td>"
MENSAJE += "</tr>"
#!SECTION fin fila aux

# SECTION - inicio fila ordenado
MENSAJE += "<tr>"
MENSAJE += "<td >ordenado</td>"
for indice, elemento in enumerate(ordenado):
    if elemento % 2 == 0:
        MENSAJE += f"<td style='{COLORCAMBIO1}'> {elemento} </td>"
    else:
        MENSAJE += f"<td style='{COLORCAMBIO2}'> {elemento} </td>"
MENSAJE += "</tr>"
#!SECTION fin fila ordenado
MENSAJE += "</table>"


MENSAJE += "El array tiene:<br>"
MENSAJE += f"{len(auxpar)}"
MENSAJE += " numeros pares y<br>" if (len(auxpar) != 1) else " numero par y<br>"
MENSAJE += f"{len(auximpar)}"
MENSAJE += " numeros impares " if (len(auximpar) != 1) else " numero impar "
print(MENSAJE)
