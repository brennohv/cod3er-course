function soma () /* function sem parametros*/ { 
    let soma = 0
    for (i in arguments) { /* Pode se criar uma function sem parametros, e com ARGUMENTS te dar a 
        possibilidade de colocar os parametros depois. */ 
        soma+= arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))