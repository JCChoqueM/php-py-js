"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys


# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
CUADRADO = 0
CUBO = 0
""" CONTADOR = 0 """
MENSAJE = ""
for CONTADOR in range(5):
    CUADRADO = pow(NUM1, 2)
    CUBO = pow(NUM1, 3)
    MENSAJE += f"# {NUM1}. Cuadrado= {CUADRADO}. <br>Cubo= {CUBO}<br><br>"
    NUM1 += 1

""" for _ in range(NUM1):
    CUADRADO = pow(NUM1, 2)
    CUBO = pow(NUM1, 3)
    MENSAJE += f"#{NUM1}. Cuadrado= {CUADRADO}. <br>Cubo= {CUBO}<br><br>"
    CONTADOR += 1
    NUM1 += 1
    if CONTADOR == 5:
        break """
print(f"FOR PY<br> {MENSAJE}")
