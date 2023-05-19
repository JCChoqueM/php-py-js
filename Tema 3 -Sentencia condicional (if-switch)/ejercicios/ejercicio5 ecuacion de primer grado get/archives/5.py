import sys

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])
num2 = int(sys.argv[2])
if num1 != 0:
    mensaje = (f"El valor de x es: {round((-num2 / num1), 2)}")
else:
    mensaje = "a debe ser distinto de 0"
print (f"{mensaje}")
