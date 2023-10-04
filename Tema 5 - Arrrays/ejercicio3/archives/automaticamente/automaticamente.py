"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

if len(sys.argv) > 1:
    NUMERO = json.loads(sys.argv[1])
    MENSAJE = []

    MAX = max(NUMERO)
    MIN = min(NUMERO)

    MENSAJE.append("<table border='1'><tr><th>Indice</th><th>Numero</th></tr>")
    
    for contador, valor_numero in enumerate(NUMERO):
        if MAX == MIN:
            MENSAJE.append(f"<tr><td>{contador}</td><td>{valor_numero} max y min</td></tr>")
        elif valor_numero == MAX:
            MENSAJE.append(f"<tr><td>{contador}</td><td>{valor_numero} maximo</td></tr>")
        elif valor_numero == MIN:
            MENSAJE.append(f"<tr><td>{contador}</td><td>{valor_numero} minimo</td></tr>")
        else:
            MENSAJE.append(f"<tr><td>{contador}</td><td>{valor_numero}</td></tr>")
    
    MENSAJE.append("</table>")
    
    print("\n".join(MENSAJE))
