def digitos(num1):
    num1 = abs(num1)
    digitos1 = 0
    dividendo = num1
    while True:
        dividendo = dividendo // 10
        digitos1 += 1
        if dividendo <= 0:
            break
    return digitos1
