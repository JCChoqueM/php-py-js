"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

# Obtén los argumentos
nombres_args = sys.argv[1:-1]  # Los primeros argumentos son los nombres
numeros_json = sys.argv[-1]  # El último argumento es el JSON de números

# Recupera los nombres pasados desde PHP
nombres = [arg.strip("'") for arg in nombres_args]

# Procesa el JSON de números
NUMERO = json.loads(numeros_json)

CONTADOR = 0
MENSAJE = ""
MENSAJE += "<table border='1'><tr><th>Indice</th><th>Mes</th><th>Temperatura</th></tr>"

for contador, valor_numero in enumerate(NUMERO):
    DESCRIPCION = valor_numero
    mes = nombres[contador]
    repetir = ""
    if valor_numero != 0:
        if valor_numero > 0:
            imagen = '<img src="././images/sol.png">'
        else:
            imagen = '<img src="././images/frio.png">'
    for i in range(abs(valor_numero)):
        repetir += imagen
    MENSAJE += f"<tr><td>{contador}</td><td>{mes}</td><td>{repetir}<br>{valor_numero}ºC</td></tr>"

MENSAJE += "</table>"
print(f"{MENSAJE}")
