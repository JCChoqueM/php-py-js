import sys

# Obtener los argumentos de la línea de comandos
num1 = int(sys.argv[1])
num2 = int(sys.argv[2])
suma = num1+num2
resta = num1-num2
multiplicacion = num1*num2
division = "Indefinido" if num2 == 0 else round(num1/num2, 2,)

# Imprimir el resultado
print(f"""suma:<br>{num1} + {num2} = {suma}
			<br><br>resta:<br>{num1} - {num2} = {resta}
			<br><br>multiplicacion:<br>{num1} * {num2} = {multiplicacion}
			<br><br>division:<br>{num1} / {num2} = {division} """)
