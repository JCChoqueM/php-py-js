def digitos(num1):
    num1 = abs(num1)
    digitos = 0
    dividendo = num1
    while dividendo > 0:
        dividendo //= 10
        digitos += 1
    return digitos
