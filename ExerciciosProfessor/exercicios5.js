/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings. */

function maiorOuIgual(numero1, numero2) {
    if(typeof numero1 != typeof numero2) {
        return false} else if(numero1 >= numero2){
            return true
        }
}

console.log(maiorOuIgual('string', 3))
console.log(maiorOuIgual(3, 3))
console.log(maiorOuIgual(5, 3))