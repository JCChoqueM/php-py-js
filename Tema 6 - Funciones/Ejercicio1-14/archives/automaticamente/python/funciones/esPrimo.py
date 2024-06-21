import math


def es_primo(numero):
    if numero <= 1:
        return False
    # Iterar desde 2 hasta la raíz cuadrada del número
    # Si el número es divisible por algún otro número, no es primo
    for i in range(2, int(math.sqrt(numero)) + 1):
        if numero % i == 0:
            return False
    # Si no se encontraron divisores, el número es primo
    return True


# Ejemplo de uso:
numero = 12
if es_primo(numero):
    print(f"El número {numero} es primo.")
else:
    print(f"El número {numero} no es primo.")
