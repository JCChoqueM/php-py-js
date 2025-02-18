# archivo_a.py


def funcion_de_a():
    from archivo_b import funcion_de_b

    print("Función en archivo A")
    funcion_de_b()


# Ejemplo de uso
if __name__ == "__main__":
    funcion_de_a()
