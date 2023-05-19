import sys

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])
if (num1 > 0 and num1 <= 40):
    salario = num1 * 12
    mensaje = f"""Horas trabajadas = {num1} Hrs.
    <br> <br> Salario = {num1} * 12Bs.
    <br> <br> Salario total = {num1} * 12 = {salario} Bs."""
elif (num1 > 40):
    hrsExtra = num1 - 40
    salExtra = hrsExtra * 16
    mensaje = f"""Horas trabajadas = {num1} Hrs.
    <br> <br> Horas Extra = {hrsExtra}
    <br> <br> Salario Extra = {hrsExtra} * 16Bs. = {salExtra}Bs.
    <br> <br> Salario total = 480 + {salExtra} = {480 + salExtra} Bs."""
elif (num1 == 0):
    mensaje = "No trabajo esta semana"
elif (num1 < 0):
    mensaje = "Ingrese un numero valido de horas trabajadas"


print(f"{mensaje}")
