import sys

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])

if num1 > 0 and num1 <= 7:
    if num1 == 1:
        solucion = (f"El dia {num1} es Lunes")
    elif num1 == 2:
        solucion = (f"El dia {num1} es Martes")
    elif num1 == 3:
        solucion = (f"El dia {num1} es Miercoles")
    elif num1 == 4:
        solucion = (f"El dia {num1} es Jueves")
    elif num1 == 5:
        solucion = (f"El dia {num1} es Viernes")
    elif num1 == 6:
        solucion = (f"El dia {num1} es Sabado")
    elif num1 == 7:
        solucion = (f"El dia {num1} es Domingo")

else:
    solucion = "Por favor ingrese un Numero Valido"

print(solucion)
