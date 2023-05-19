import sys
import math

# Obtener los argumentos de la línea de comandos
dia = int(sys.argv[1])
mes = int(sys.argv[2])

if ((dia > 0 and dia <= 31) and (mes > 0 and mes <= 12)) and (
    (mes == 2 and dia <= 29)
    or ((mes == 4 or mes == 6 or mes == 9 or mes == 11) and dia <= 30)
    or (
        (
            mes == 1
            or mes == 3
            or mes == 5
            or mes == 7
            or mes == 8
            or mes == 10
            or mes == 12
        )
        and dia <= 31
    )
):
    if (dia >= 21 and mes == 3) or (dia <= 19 and mes == 4):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Marzo"if mes == 3 else"Abril")} <br> Su signo es Aries"""

    elif (dia >= 20 and mes == 4) or (dia <= 20 and mes == 5):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Abril" if mes == 4 else "Mayo")} <br> Su signo es Tauro"""

    elif (dia >= 21 and mes == 5) or (dia <= 20 and mes == 6):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Mayo"if mes == 5 else "Junio")} <br> Su signo es Geminis"""

    elif (dia >= 21 and mes == 6) or (dia <= 22 and mes == 7):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Junio"if mes == 6 else "Julio")} <br> Su signo Cancer"""

    elif (dia >= 23 and mes == 7) or (dia <= 22 and mes == 8):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Julio"if mes == 7 else "Agosto")} <br> Su signo es Leo"""

    elif (dia >= 23 and mes == 8) or (dia <= 22 and mes == 9):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Agosto"if mes == 8 else "Septiembre")} <br> Su signo es Virgo"""

    elif (dia >= 23 and mes == 9) or (dia <= 22 and mes == 10):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Septiembre"if mes == 9 else "Octubre")} <br> Su signo es Libra"""

    elif (dia >= 23 and mes == 10) or (dia <= 21 and mes == 11):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Octubre"if mes == 10 else "Noviembre")} <br> Su signo es Escorpio"""

    elif (dia >= 22 and mes == 11) or (dia <= 21 and mes == 12):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Noviembre"if mes == 11 else "Diciembre")} <br> Su signo es Sagitario"""

    elif (dia >= 22 and mes == 12) or (dia <= 19 and mes == 1):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Diciembre"if mes == 12 else "Enero")} <br> Su signo es Capricornio"""

    elif (dia >= 20 and mes == 1) or (dia <= 18 and mes == 2):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Enero"if mes == 1 else "Febrero")} <br> Su signo es Acuario"""

    elif (dia >= 19 and mes == 2) or (dia <= 20 and mes == 3):
        mensaje = f"""Su fecha de nacimiento es: <br> {dia} de {("Febrero"if mes == 2 else "Marzo")} <br> Su signo es Piscis"""
else:
    mensaje = f"Verifique la fecha de su nacimiento"

print(f"{mensaje}")
