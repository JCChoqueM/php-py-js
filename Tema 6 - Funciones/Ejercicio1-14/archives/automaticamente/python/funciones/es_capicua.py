"""
Este es un módulo de ejemplo.

Proporciona funciones para realizar operaciones matemáticas simples.
"""


def es_capicua(numero):
    """
    Determina si un número es capicúa (palíndromo).

    Un número capicúa es aquel que se lee igual de izquierda a derecha y
    de derecha a izquierda.

    Args:
        numero (int): El número a verificar.

    Returns:
        str: Un mensaje indicando si el número es capicúa.
    """
    numero_original = numero
    numero = abs(numero)
    volteado = 0

    while numero > 0:
        digito = numero % 10
        volteado = volteado * 10 + digito
        numero = numero // 10

    if abs(numero_original) == volteado:
        return f"El numero {abs(numero_original)} es capicua"  
    else:
        return f"El numero {abs(numero_original)} NO es capicua"  

