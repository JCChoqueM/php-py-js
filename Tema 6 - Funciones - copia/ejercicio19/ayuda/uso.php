<?php

// Biblioteca de funciones matemáticas
function esCapicua($numero)
{
    return $numero == voltea($numero);
}

function esPrimo($numero)
{
    if ($numero < 2) {
        return false;
    }
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false;
        }
    }
    return true;
}

function siguientePrimo($numero)
{
    $siguiente = $numero + 1;
    while (!esPrimo($siguiente)) {
        $siguiente++;
    }
    return $siguiente;
}

function potencia($base, $exponente)
{
    return pow($base, $exponente);
}

function digitos($numero)
{
    return strlen((string)$numero);
}

function voltea($numero)
{
    return (int)strrev((string)$numero);
}

function digitoN($numero, $posicion)
{
    $numeroInvertido = (string)voltea($numero);
    if ($posicion >= 0 && $posicion < strlen($numeroInvertido)) {
        return (int)$numeroInvertido[$posicion];
    } else {
        return null;
    }
}

function posicionDeDigito($numero, $digito)
{
    $numeroInvertido = (string)voltea($numero);
    $posicion = strpos($numeroInvertido, (string)$digito);
    if ($posicion !== false) {
        return strlen($numeroInvertido) - $posicion - 1;
    } else {
        return -1;
    }
}

function quitaPorDetras($numero, $n)
{
    return (int)substr((string)$numero, 0, -$n);
}

function quitaPorDelante($numero, $n)
{
    return (int)substr((string)$numero, $n);
}

function pegaPorDetras($numero, $digito)
{
    return (int)((string)$numero . (string)$digito);
}

function pegaPorDelante($numero, $digito)
{
    return (int)((string)$digito . (string)$numero);
}

function trozoDeNumero($numero, $inicio, $fin)
{
    return (int)substr((string)$numero, $inicio, $fin - $inicio + 1);
}

function juntaNumeros($numero1, $numero2)
{
    return (int)((string)$numero1 . (string)$numero2);
}

// Interfaz de usuario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $numero = isset($_POST["numero"]) ? (int)$_POST["numero"] : null;
    $numero2 = isset($_POST["numero2"]) ? (int)$_POST["numero2"] : null;
    $posicion = isset($_POST["posicion"]) ? (int)$_POST["posicion"] : null;
    $digito = isset($_POST["digito"]) ? (int)$_POST["digito"] : null;
    $n = isset($_POST["n"]) ? (int)$_POST["n"] : null;
    $inicio = isset($_POST["inicio"]) ? (int)$_POST["inicio"] : null;
    $fin = isset($_POST["fin"]) ? (int)$_POST["fin"] : null;

    $resultado = "";
    if (isset($_POST["accion"])) {
        switch ($_POST["accion"]) {
            case "esCapicua":
                $resultado = esCapicua($numero) ? "Es capicúa" : "No es capicúa";
                break;
            case "esPrimo":
                $resultado = esPrimo($numero) ? "Es primo" : "No es primo";
                break;
            case "siguientePrimo":
                $resultado = "El siguiente primo es: " . siguientePrimo($numero);
                break;
            case "potencia":
                $resultado = "La potencia es: " . potencia($numero, $numero2);
                break;
            case "digitos":
                $resultado = "Número de dígitos: " . digitos($numero);
                break;
            case "voltea":
                $resultado = "Número volteado: " . voltea($numero);
                break;
            case "digitoN":
                $resultado = "El dígito en la posición $posicion es: " . digitoN($numero, $posicion);
                break;
            case "posicionDeDigito":
                $resultado = "La posición del dígito $digito es: " . posicionDeDigito($numero, $digito);
                break;
            case "quitaPorDetras":
                $resultado = "Número con $n dígitos quitados por detrás: " . quitaPorDetras($numero, $n);
                break;
            case "quitaPorDelante":
                $resultado = "Número con $n dígitos quitados por delante: " . quitaPorDelante($numero, $n);
                break;
            case "pegaPorDetras":
                $resultado = "Número con $numero2 pegado por detrás: " . pegaPorDetras($numero, $numero2);
                break;
            case "pegaPorDelante":
                $resultado = "Número con $numero2 pegado por delante: " . pegaPorDelante($numero, $numero2);
                break;
            case "trozoDeNumero":
                $resultado = "Trozo del número: " . trozoDeNumero($numero, $inicio, $fin);
                break;
            case "juntaNumeros":
                $resultado = "Números juntos: " . juntaNumeros($numero, $numero2);
                break;
            default:
                $resultado = "Acción no válida";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca de Funciones Matemáticas</title>
</head>

<body>
    <h1>Biblioteca de Funciones Matemáticas</h1>
    <form method="post">
        <label for="numero">Número:</label>
        <input type="number" name="numero" id="numero" required>
        <br><br>
        <label for="numero2">Número 2:</label>
        <input type="number" name="numero2" id="numero2">
        <br><br>
        <label for="posicion">Posición:</label>
        <input type="number" name="posicion" id="posicion">
        <br><br>
        <label for="digito">Dígito:</label>
        <input type="number" name="digito" id="digito">
        <br><br>
        <label for="n">N:</label>
        <input type="number" name="n" id="n">
        <br><br>
        <label for="inicio">Inicio:</label>
        <input type="number" name="inicio" id="inicio">
        <br><br>
        <label for="fin">Fin:</label>
        <input type="number" name="fin" id="fin">
        <br><br>
        <select name="accion">
            <option value="esCapicua">Es Capicúa</option>
            <option value="esPrimo">Es Primo</option>
            <option value="siguientePrimo">Siguiente Primo</option>
            <option value="potencia">Potencia</option>
            <option value="digitos">Número de Dígitos</option>
            <option value="voltea">Voltea</option>
            <option value="digitoN">Dígito en la Posición</option>
            <option value="posicionDeDigito">Posición de Dígito</option>
            <option value="quitaPorDetras">Quita Por Detrás</option>
            <option value="quitaPorDelante">Quita Por Delante</option>
            <option value="pegaPorDetras">Pega Por Detrás</option>
            <option value="pegaPorDelante">Pega Por Delante</option>
            <option value="trozoDeNumero">Trozo de Número</option>
            <option value="juntaNumeros">Junta Números</option>
        </select>
        <br><br>
        <input type="submit" value="Calcular">
    </form>
    <br>
    <div>
        <?php echo $resultado; ?>
    </div>
</body>

</html>