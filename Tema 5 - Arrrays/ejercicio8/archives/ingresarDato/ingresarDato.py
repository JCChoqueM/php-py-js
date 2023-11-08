"""
Este módulo muestra un MENSAJE incrementando el VALOR de i.
"""
import sys
import json

if len(sys.argv) > 1:
    NUMERO = json.loads(sys.argv[1])
    MENSAJE = ""
    ARRAYVALIDO = True
    for elemento in NUMERO:
        if elemento < 0:
            ARRAYVALIDO = False
            break
    if ARRAYVALIDO:
        COLORCAMBIO1 = "background-COLOR: #2EFE64; COLOR:black"
        COLORCAMBIO2 = "background-COLOR: #FE2E2E; COLOR:black"
        auxPri = []
        auxNoPri = []
        aux = []
        auxOrde = []

        def es_primo(numero2):
            """
            Determina si un número es primo.

            Args:
                numero2 (int): El número que se va a verificar.

            Returns:
                bool: True si el número es primo, False en caso contrario.
            """
            if numero2 < 2:
                return False
            elif numero2 == 2 or numero2 == 3:
                return True
            elif numero2 % 2 == 0:
                return False
            else:
                for i in range(2, int(numero2**0.5) + 1):
                    if numero2 % i == 0:
                        return False
                return True

        for elemento in NUMERO:
            if es_primo(elemento):
                auxPri.append(elemento)
            else:
                auxNoPri.append(elemento)
        aux = auxPri + auxNoPri
        auxPri.sort()
        auxNoPri.sort()
        auxOrde = auxPri + auxNoPri
        MENSAJE = "<table border='1' >"
        filas = [
            ["Indice", list(range(len(NUMERO)))],
            ["Matriz", NUMERO],
            ["Aux", aux],
            ["Ordenado", auxOrde],
        ]
        for fila in filas:
            TITULO = fila[0]
            datos = fila[1]
            MENSAJE += "<tr>"
            MENSAJE += f"<th>{TITULO}</th>"
            if TITULO != "Indice":
                for elemento in datos:
                    COLOR = COLORCAMBIO1 if es_primo(elemento) else COLORCAMBIO2
                    MENSAJE += f"<td style='{COLOR}'>{elemento}</td>"
            else:
                for elemento in datos:
                    MENSAJE += f"<td>{elemento}</td>"
            MENSAJE += "</tr>"
        MENSAJE += "</table>"
        MENSAJE += "El array tiene:<br>"
        PLURALPRI = (
            " numeros primos y <br>" if len(auxPri) != 1 else " numero primo y <br>"
        )
        PLURALNOPRI = (
            " numeros no primos <br>" if len(auxNoPri) != 1 else " numero no primo <br>"
        )
        MENSAJE += f"{len(auxPri)}{PLURALPRI}"
        MENSAJE += f"{len(auxNoPri)}{PLURALNOPRI} "
    print(f"{MENSAJE}")
