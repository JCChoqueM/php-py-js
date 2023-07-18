"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""


# Obtener los argumentos de la línea de comandos
CONTADOR = 0
MENSAJE = ""
N = 2
I = 1
for _ in range(2, 101):
    while I <= N:
        if N % I == 0:
            CONTADOR += 1
        I += 1
    if CONTADOR <= 2:
        MENSAJE += f"({N})  "
    I = 1
    CONTADOR = 0
    N += 1
print(f"{MENSAJE}")
