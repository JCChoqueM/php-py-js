"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

if len(sys.argv) > 1:
    NUMERO = json.loads(sys.argv[1])
    MENSAJE = ""
    MENSAJE += (
        "<table border='1'><tr><th>Indice</th><th>Numero</th><th>Rotado</th></tr>"
    )
    VOLTEADO = NUMERO.copy()
    AUX = VOLTEADO.pop()
    VOLTEADO.insert(0, AUX)
    for contador, valor_numero in enumerate(NUMERO):
        DESCRIPCION = valor_numero
        ROTAR = VOLTEADO[contador]
        MENSAJE += f"<tr><td>{contador}</td><td>{DESCRIPCION}</td><td>{ROTAR}</td></tr>"

    MENSAJE += "</table>"

    print(f"{MENSAJE}")
