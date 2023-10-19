import sys
import json

if len(sys.argv) > 1:
    try:
        NUMERO = json.loads(sys.argv[1])
        print(NUMERO)
    except json.JSONDecodeError:
        print("Error: El JSON no se pudo decodificar")
