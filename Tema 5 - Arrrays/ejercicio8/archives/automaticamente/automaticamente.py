"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

if len(sys.argv) > 1:
    NUMERO = json.loads(sys.argv[1])
    MENSAJE = ""
    MENSAJE += "<table border='1'><tr><th>Indice</th><th>Numero</th><th>Color</th></tr>"
    for contador, valor_numero in enumerate(NUMERO):
        if abs(valor_numero % 2 == 0):
            colorCambio = "background-color: yellow; color:black"
            valor = " es par"
        else:
            colorCambio = "background-color: orange; color:black"
            valor = " es impar"
        MENSAJE += f"<tr><td style='{colorCambio}'>{contador}</td><td style='{colorCambio}'>{valor_numero}</td><td style='{colorCambio}'>{valor_numero} {valor}</td></tr>"
    print(f"{MENSAJE}")