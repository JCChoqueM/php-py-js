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
while CONTADOR <= 4:
    CUADRADO = pow(NUM1, 2)
    CUBO = pow(NUM1, 3)
    MENSAJE += f"""# {NUM1}. Cuadrado={CUADRADO}.<br> Cubo={CUBO}<br><br>"""
    CONTADOR+=1
    NUM1+=1
print(f"WHILE PY<br> {MENSAJE}")
