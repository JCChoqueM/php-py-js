"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import random

NUMERO = []
CUADRADO = []
CUBO = []
CONTADOR = 0
MENSAJE =""
for _ in range(0, 6, 1):
    ALEATORIO = random.randint(1, 100)
    NUMERO.append(ALEATORIO)
for elemento in NUMERO:
    cuadrado = pow(elemento, 2)
    cubo = pow(elemento, 3)
    CUADRADO.append(cuadrado)
    CUBO.append(cubo)
MENSAJE += "<table border='1'><tr><th>N</th><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>"
for contador, valor_numero in enumerate(NUMERO):
    MENSAJE+= f'''<tr>
    <td> {contador+1} </td>
    <td>{valor_numero}</td>
    <td>{CUADRADO[contador]}</td>
    <td>{CUBO[contador]}</td>
    </tr>'''
print (f"{MENSAJE}")
