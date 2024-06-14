import os
import sys
import random

# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "funciones"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from es_capicua import suma

sumando = suma(random.randint(1, 10), random.randint(1, 10))


def saludar():
    print("hola")
