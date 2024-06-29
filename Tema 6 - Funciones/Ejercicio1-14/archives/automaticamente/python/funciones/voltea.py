from digitos import digitos

def voltea(num1):
    digitos_original = digitos(num1)
    voltea = 0
    dividendo = abs(num1)  # Consideramos el valor absoluto para voltear correctamente
    array = []

    # Voltear el número
    while dividendo > 0:
        voltea = voltea * 10 + (dividendo % 10)
        dividendo //= 10

    digitos_voltea = digitos(voltea)

    # Si el número original y el número volteado tienen la misma cantidad de dígitos
    if digitos_original == digitos_voltea:
        array.append(
            -voltea if num1 < 0 else voltea
        )  # Asegurarse de mantener el signo negativo
        array.append(-voltea if num1 < 0 else voltea)
    else:
        ceros = digitos_original - digitos_voltea
        volteado_str = str(voltea)

        # Añadir ceros al principio del número volteado
        for _ in range(ceros):
            volteado_str = "0" + volteado_str

        array.append("-" + volteado_str if num1 < 0 else volteado_str)
        array.append(-voltea if num1 < 0 else voltea)

    return array
