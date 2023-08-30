"""
Este módulo muestra un MENSAJE incrementando el valor de i.
"""
import sys
import json

if len(sys.argv) > 1:
    numeros = json.loads(sys.argv[1])
    suma = sum(numeros)
    print(suma)
