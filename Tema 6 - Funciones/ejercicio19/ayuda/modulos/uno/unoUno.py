import os
import sys

# Obtener la ruta del directorio actual donde se encuentra doss.py
current_dir = os.path.dirname(os.path.abspath(__file__))

# Obtener la ruta al directorio donde está uno.py
dos_dir = os.path.abspath(os.path.join(current_dir, "..", "dos"))

# Añadir el directorio donde está uno.py al sys.path
sys.path.append(dos_dir)

# Importar el módulo uno.py
from doss import dositos

# Llamar a una función o método de uno.py si es necesario
unito="unito"
print(dositos)


