"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys


# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
MENSAJE = ""
CUADRADO = 1
CUBO = 0
CONTADOR = 0

BUCLE = True
while BUCLE:
    CUADRADO=pow(NUM1,2)
    CUBO=pow(NUM1,3)
    MENSAJE += f"#{NUM1}. Cuadrado= {CUADRADO}. <br> Cubo={CUBO}<br><br>"
    NUM1 +=1
    CONTADOR +=1
    if CONTADOR == 5:
        BUCLE = False
print(f"DO-WHILE PY<br> {MENSAJE}")
