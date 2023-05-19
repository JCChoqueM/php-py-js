import sys
import math

# Obtener los argumentos de la línea de comandos
a = int(sys.argv[1])
ultimo = abs(a) % 10 if a < 0 else a % 10
mensaje = f"El ultimo digito de {a} <br>es: {ultimo}"
print(f"{mensaje}")
