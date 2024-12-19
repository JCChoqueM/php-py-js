<?php
// app/includes/funciones.php

// Incluir todos los archivos PHP en el directorio actual
foreach (glob(__DIR__ . '/*.php') as $file) {
    // Excluir este mismo archivo para evitar bucles infinitos
    if ($file !== __FILE__) {
        include_once $file;
    }
}
