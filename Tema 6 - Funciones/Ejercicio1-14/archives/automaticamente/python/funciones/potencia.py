def potencia(base, exponente):
    potencia = 1
    for _ in range(exponente):
        potencia *= base
    return potencia
