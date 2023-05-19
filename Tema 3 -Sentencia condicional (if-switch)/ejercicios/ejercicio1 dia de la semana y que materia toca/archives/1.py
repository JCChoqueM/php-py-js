import sys

# Obtener los argumentos de la línea de comandos
num1 = (sys.argv[1])
print(type(num1))
if num1 == "lunes":
    mensaje = "Lunes tienes matematicas"
elif num1 == "martes":
    mensaje = "Martes tienes lenguaje"
elif num1 == "miercoles":
    mensaje = "Miercoles tienes fisica"
elif num1 == "jueves":
    mensaje = "Jueves tienes quimica"
elif num1 == "viernes":
    mensaje = "Viernes tienes historia"
elif num1 == "sabado":
    mensaje = "Sabado tienes deportes"
elif num1 == "domingo":
    mensaje = "Domingo es tu dia de descanso Felicidades!!!"
else:
    mensaje = "No es un día valido"

print(mensaje)
