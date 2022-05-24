/* Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function numeroMes(numero) {
    if(numero == 1) {
        return 'Janeiro'
    } else if(numero == 2) {
        return 'Fevereiro'
    } else if(numero == 3) {
        return 'Março'
    } else if(numero == 4) {
        return 'Abril'
    } else return 'Maio.....'  
}
 
console.log(numeroMes(1))


function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return mapeamento[--numero]
    }
    