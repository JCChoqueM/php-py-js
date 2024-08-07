<?php
function BinarioDecimal($numeroBinario)
{
        $decimal = bindec($numeroBinario);
        return $decimal;
}

function HexadecimalDecimal($numeroHexadecimal)
{
        $decimal = hexdec($numeroHexadecimal);
        return $decimal;
}

function OctalDecimal($numeroOctal)
{
        $decimal = octdec($numeroOctal);
        return $decimal;
}
