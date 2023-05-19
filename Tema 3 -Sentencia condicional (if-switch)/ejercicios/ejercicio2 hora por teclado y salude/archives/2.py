import sys

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])
if (num1 >= 0 and num1 < 24):
    if (num1 >= 6 and num1 <= 12):
        solucion = "Buenos Dias"
    elif (num1 >= 13 and num1 <= 20):
        solucion = "Buenas Tardes"
    elif (num1 >= 21 or num1 <= 5):
        solucion = "Buenas Noches"
else:
    solucion = "Hora no valida"
print(solucion)
