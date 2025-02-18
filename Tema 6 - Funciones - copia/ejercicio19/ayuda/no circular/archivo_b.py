# archivo_b.py


def funcion_de_b():
    from archivo_a import funcion_de_a

    print("Función en archivo B")
    funcion_de_a()


# Ejemplo de uso
if __name__ == "__main__":
    funcion_de_b()
