/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */

function estaEntre(minimo, maximo, numero, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }






