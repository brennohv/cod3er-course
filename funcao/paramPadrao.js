// estrategia 1 para gerar valor padrão 

function soma1(a, b, c) {
    a = a || 1 // || significa ou, no caso se eu nao der o valor de A, B, C ele vai ter o 1 como valor padrão.
    b = b || 1 
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padão do es2015 SE FOR FAZER, FAÇA ESSE OU O PRIMEIRO EXEMPLO...

function soma3(a = 1, b = 1, c = 1) { /* Nesse caso é muito mais simples e reduzido de fazer as mesmas coisas feitas a cima,
     pois ja dou os parametros com o valor padrão caso nao informa eles na chamada da function. */
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))