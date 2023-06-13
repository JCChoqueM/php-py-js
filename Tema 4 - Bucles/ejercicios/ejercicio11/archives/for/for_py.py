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
for _ in range(NUM1):
    NUM1 = NUM1 // 10
    CONTADOR += 1

    if NUM1 <= 0:
        break
if CONTADOR >= 2:
    MENSAJE = f"El numero {NUEVO_NUMERO} tiene {CONTADOR} Digitos"
else:
    MENSAJE = f"""
    El numero {NUEVO_NUMERO} tiene 1 Digito """
print(f"FOR PY<br> {MENSAJE}")
