import sys
import math

# Obtener los argumentos de la línea de comandos
a = int(sys.argv[1])
par = "Es par" if a % 2 == 0 else "No es par"
div = "y es divisible entre 5" if a % 5 == 0 else "y no es divisible entre 5"
mensaje = f"El numero {a}: <br>{par}<br>{div}"
print(f"{mensaje}")
