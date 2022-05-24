/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7] */

function repetir (elemento, repetidor) {
    const resultado = []
    for(let i = 0; i < repetidor; i++) {
        resultado.push(elemento)
    }
    return resultado
}

console.log(repetir(5, 7))












