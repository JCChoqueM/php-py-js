# -- coding: latin-1 --
import sys
import json


# Obtener los argumentos de la línea de comandos
asociativo = sys.argv[1]
fruta = sys.argv[2]
asociativo = asociativo.replace("\\u00f1", "ñ")
fruta = fruta.replace("\\u00f1", "ñ")
fruta = fruta.strip()

# Dividir la cadena en pares clave-valor
pares_clave_valor = [par.strip() for par in asociativo[1:-1].split(",")]

# Crear un asociativo_diccionario a partir de los pares clave-valor
asociativo_diccionario = {}
for par in pares_clave_valor:
    clave, valor = par.split(":")
    asociativo_diccionario[clave.strip()] = valor.strip()

if fruta in asociativo_diccionario:
    # Construir la tabla HTML con la información de la fruta
    mensaje = "<table border='1' style='border-collapse: collapse; text-align: center; background-color: yellow;'>"
    mensaje += "<tr>"
    mensaje += f"<th colspan='2' style='font-size: 2.0em; font-weight: bold;color: green;'>{fruta}</th>"

    mensaje += "</tr>"
    mensaje += "<tr>"
    mensaje += "<td style='padding: 10px;'>"
    mensaje += f"<img src='images/{fruta}.png' alt='{fruta}' style='width: 150px; height: 150px;'><br>"
    mensaje += "</td>"
    mensaje += "</tr>"
    mensaje += "<tr>"
    mensaje += "<td style='padding: 10px;'>"
    mensaje += f"<strong style='font-size: 1.2em; '>{fruta} en inglés es: <br>{asociativo_diccionario[fruta]}</strong>"
    mensaje += "</td>"
    mensaje += "</tr>"
    mensaje += "</table>"
else:
    mensaje = f"<p style='color: red;'>No bromees, {fruta} no es una fruta >:("
print(mensaje)
