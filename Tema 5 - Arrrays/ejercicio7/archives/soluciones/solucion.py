"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import random

MENSAJE = ""
COLORCAMBIO1 = "background-color: yellow; color:black"
COLORCAMBIO2 = "background-color: orange; color:black"
aux = []
auxpar = []
auximpar = []
ordenado = []
NUMERO = []

# SECTION -  inicio numeros random
for _ in range(0, 6, 1):
    ALEATORIO = random.randint(1, 100)
    NUMERO.append(ALEATORIO)
#!SECTION - fin numeros random

# SECTION - inicio arrays

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

#!SECTION - fin arrays

MENSAJE += "<table border='1'><tr><th>Inidice</th><th>Numero</th><th>Aux</th><th>Ordenado</th></tr>"
for indice, elemento in enumerate(NUMERO):
    MENSAJE += f"<tr><td>{indice}</td>"

    NUMEROS = elemento
    if NUMEROS % 2 == 0:
        MENSAJE += f"<td style='{COLORCAMBIO1}'>{NUMEROS}</td>"
    else:
        MENSAJE += f"<td style='{COLORCAMBIO2}'>{NUMEROS}</td>"

    if aux[indice] % 2 == 0:
        MENSAJE += f"<td style='{COLORCAMBIO1}'>{aux[indice]}</td>"
    else:
        MENSAJE += f"<td style='{COLORCAMBIO2}'>{aux[indice]}</td>"

    if ordenado[indice] % 2 == 0:
        MENSAJE += f"<td style='{COLORCAMBIO1}'>{ordenado[indice]}</td>"
    else:
        MENSAJE += f"<td style='{COLORCAMBIO2}'>{ordenado[indice]}</td>"

MENSAJE += "</tr>"
MENSAJE += "</table>"

MENSAJE += "El array tiene:<br>"
MENSAJE += f"{len(auxpar)}"
MENSAJE += " numeros pares y<br>" if (len(auxpar) != 1) else " numero par y<br>"
MENSAJE += f"{len(auximpar)}"
MENSAJE += " numeros impares " if (len(auximpar) != 1) else " numero impar "
print(f"{MENSAJE}")
