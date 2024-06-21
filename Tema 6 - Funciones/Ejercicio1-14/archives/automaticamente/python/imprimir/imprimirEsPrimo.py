from funciones.funciones import es_primo


def imprimir_es_primo(input1):
    rojo = "style='color: red;'"
    verde = "style='color: darkgreen;'"
    mensaje_error = ""
    estado = not input1.isdigit() if isinstance(input1, str) else "0"

    if estado == "0":
        mensaje_error = (
            "El campo está vacío o no es un número. Por favor, ingrese número(s)."
        )
    elif estado == "1":
        input1 = int(input1)  # Asegurarse de que input1 sea un entero
        abs_input1 = abs(input1)
        es_primo_input1 = es_primo(input1)
        es_primo_abs_input1 = es_primo(abs_input1)
        color = verde if es_primo_abs_input1 else rojo

        mensaje_error = "<span>"
        if input1 > 1:
            mensaje_error += f"El número <span {color}>{input1}</span> {'es primo' if es_primo_input1 else 'NO es primo'}"
        else:
            mensaje_error += f"En matemáticas, un número primo es un número natural mayor que <span {verde}>1</span>, el número <span {rojo}>{input1}</span> no es primo."
            if input1 != 0 and input1 != 1:
                mensaje_error += f"<br><br><span {color}>Ignorando el signo:</span><br>"
                mensaje_error += f"El número <span {color}>{abs_input1}</span> {'es primo' if es_primo_abs_input1 else 'NO es primo'}"
        mensaje_error += "</span>"
    else:
        mensaje_error = "Error desconocido. Por favor, revise las entradas."

    return mensaje_error


# Ejemplo de uso:
input1 = "17"
print(imprimir_es_primo(input1))
