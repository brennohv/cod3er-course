const nums = [1, 2, 3, 4, 5]

//For com proposito
let resultado = nums.map(function(e) {  // map gera um novo array, ele nao causa uma modificação no array original.
     return e * 2
})

console.log(resultado)

const soma10 = function(e) {return e + 10}
const triplo = e => e * 3  // arrow function ja tem o return implicito.
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` /* A função parseFloat() analisa um argumento 
string e retorna um número de ponto flutuante. Exemplo: se essa string tivesse letras ele iria desconsiderar e retornar numeros. */

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)