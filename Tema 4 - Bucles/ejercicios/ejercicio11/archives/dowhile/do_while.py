"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys


# Obtener los argumentos de la línea de comandos
NUM1 = int(sys.argv[1])
NUEVO_NUMERO = NUM1
if NUM1 < 0:
    NUM1 = abs(NUM1)
CONTADOR = 0

BUCLE = True
while BUCLE:
    NUM1 = NUM1 // 10
    CONTADOR = CONTADOR + 1
    if NUM1 <= 0:
        BUCLE = False
if CONTADOR >= 2:
    MENSAJE = f"El numero {NUEVO_NUMERO} tiene {CONTADOR} Digitos"
else:
    MENSAJE = f"""
    El numero {NUEVO_NUMERO} tiene {CONTADOR} Digito """
print(f"DO-WHILE PY<br> {MENSAJE}")
