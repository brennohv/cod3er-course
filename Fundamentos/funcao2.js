// Armazenando uma funcao em uma variavel 
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {  // => É uma forma simplificada de realizar uma função
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtração = (a,b) => a-b // Outra forma mais simplificada porem esta so pode ter uma linha de codigo.
console.log(subtração(2,3))