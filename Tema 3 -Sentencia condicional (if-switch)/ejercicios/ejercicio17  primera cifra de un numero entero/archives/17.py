import sys
import math

# Obtener los argumentos de la línea de comandos
b = int(sys.argv[1])
a = abs(b)
if 0 <= a <= 99999:
    if 0 <= a <= 9:
        mensaje = f"El primer digito de {b} <br>es: {a}"
    elif 10 <= a <= 99:
        mensaje = f"El primer digito de {b} <br>es: {int(a/10)}"
    elif 100 <= a <= 999:
        mensaje = f"El primer digito de {b} <br>es: {int(a/100)}"
    elif 1000 <= a <= 9999:
        mensaje = f"El primer digito de {b} <br>es: {int(a/1000)}"
    elif 10000 <= a <= 99999:
        mensaje = f"El primer digito de {b} <br>es: {int(a/10000)}"
else:
    mensaje = "Ingrese un maximo de 5 digitos"
print(mensaje)
