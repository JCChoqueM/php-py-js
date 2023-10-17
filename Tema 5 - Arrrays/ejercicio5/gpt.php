<!DOCTYPE html>
<html>

<head>
    <title>Gráfica de Temperaturas</title>
    <style>
        .graph-container {
            display: flex;
            align-items: flex-end;
            padding-top: 10px;
        }

        .graph-label {
            text-align: center;
            width: 100px;
            margin-bottom: 10px;
        }

        .bar {
            display: block;
            height: 20px;
            background-color: blue;
            clear: both;
        }

        .bar-negative {
            background-color: red;
        }

        .reference-line {
            height: 1px;
            background-color: black;
            position: absolute;
            width: 100%;
        }

        .axis-labels {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
        }
    </style>
</head>

<body>
    <h1>Gráfica de Temperaturas para enero, febrero y marzo</h1>
    <div class="graph-container">
        <div class="axis-labels">
            <span class="graph-label">-10</span>
            <span class="graph-label">0</span>
            <span class="graph-label">10</span>
        </div>
        <div class="reference-line"></div>
        <?php
        // Datos de temperaturas para enero, febrero y marzo
        $temperaturas = [
            "Enero" => 5,
            "Febrero" => 2,
            "Marzo" => -1
        ];

        // Encontrar el valor mínimo y máximo de temperaturas para ajustar la escala
        $minTemperatura = -10; // Establecer el mínimo en -10 para asegurar que la línea sea visible
        $maxTemperatura = 10; // Establecer el máximo en 10 para asegurar que la línea sea visible

        // Recorrer los datos y crear las barras
        foreach ($temperaturas as $mes => $temperatura) {
            $barClass = ($temperatura < 0) ? 'bar-negative' : '';
            echo "<div class='bar-label'>$mes</div>";
            echo "<div class='bar $barClass' style='width: " . ((abs($temperatura) * 10) + 10) . "px;'></div>";
        }
        ?>
    </div>
</body>

</html>