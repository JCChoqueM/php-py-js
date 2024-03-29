"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

if len(sys.argv) > 1:
    NUMERO = json.loads(sys.argv[1])
    CONTADOR = 0
    MENSAJE = ""
    MAX = NUMERO[0]
    MIN = NUMERO[0]
    for elemento in NUMERO:
        if elemento > MAX:
            MAX = elemento
        if elemento < MIN:
            MIN = elemento
    MENSAJE += "<table border='1'><tr><th>Indice</th><th>Numero</th></tr>"
    for contador, valor_numero in enumerate(NUMERO):
        if MAX == MIN:
            MENSAJE += f"""<tr><td>{contador}</td><td>{valor_numero} max y min</td></tr>"""
        elif valor_numero == MAX:
            MENSAJE += f"""<tr><td>{contador}</td><td>{valor_numero} maximo</td></tr>"""
        elif valor_numero == MIN:
            MENSAJE += f"""<tr><td>{contador}</td><td>{valor_numero} minimo</td></tr>"""
        else:
            MENSAJE += f"""<tr><td>{contador}</td><td>{valor_numero}</td></tr>"""
    print(f"{MENSAJE}")
