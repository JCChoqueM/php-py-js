"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys

# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
NUM2 = int(sys.argv[2])
MENSAJE = ""
MAYOR = None
MENOR = None
if NUM2 >= 0 and NUM2 < 10:
    MENSAJE = "El presente ejercicio no tiene una solucion simple con el ciclo FOR"
else:
    MENSAJE = "El digito debe estar comprendido entre los numeros 0 y 9"

print(f"{MENSAJE}")
