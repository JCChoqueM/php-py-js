"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

if len(sys.argv) > 1:
    NUMERO = json.loads(sys.argv[1])
    MENSAJE = ""

    MAX = max(NUMERO)
    MIN = min(NUMERO)

    MENSAJE += "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>"

    for contador, valor_numero in enumerate(NUMERO):
        DESCRIPCION = valor_numero
        if MAX == MIN:
            DESCRIPCION = f"{valor_numero} max y min"
        elif valor_numero == MAX:
            DESCRIPCION = f"{valor_numero} maximo"
        elif valor_numero == MIN:
            DESCRIPCION = f"{valor_numero} minimo"

        MENSAJE += f"<tr><td>{contador}</td><td>{DESCRIPCION}</td></tr>"

    MENSAJE += "</table>"

    print(f"{MENSAJE}")
