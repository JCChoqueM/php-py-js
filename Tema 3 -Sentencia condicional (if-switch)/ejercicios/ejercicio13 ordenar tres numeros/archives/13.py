import sys
import math

# Obtener los argumentos de la línea de comandos
a = int(sys.argv[1])
b = int(sys.argv[2])
c = int(sys.argv[3])

if a >= b and a >= c:
    mayor = a
    menor = b if b < c else c
elif b >= a and b >= c:
    mayor = b
    menor = a if a < c else c
elif c >= a and c >= b:
    mayor = c
    menor = a if a < b else b
medio = a + b + c - mayor - menor
mensaje = f"""<br>Menor a mayor es:<br>{menor}, {medio}, {mayor}
        <br><br>Mayor a menor es:<br>{mayor}, {medio}, {menor}"""

print(f"{mensaje}")
