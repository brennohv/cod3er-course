const valores = [7.7, 8.9, 6.3, 9.2] //arrays é []
console.log(valores[0], valores[3]) // pedi a informação da posição 0 e 3 do arrays (7.7, 9,2) ** começa em 0
console.log(valores[4]) // pedi uma posição que nao existia, vai dar como undefined

valores[4] = 10 //colocou mais um elemento no arrays
console.log(valores) // (7.7, 8.9, 6.3, 9.2, 10)
console.log(valores.length) // **LENGTH** quantos elementos temos no arrays (5)

valores.push({id: 3}, false, null, 'teste') //.push adiciona mais de 1 elemento no arrays.
console.log(valores) 

console.log(valores.pop()) //.pop retira o ultimo elemento do arrays
delete valores [0] // delete apaga o elemento que esta no arrays informado
console.log(valores)

console.log(typeof valores) // tipo do arrays

const objetoNovo = {
    nome: 'Brenno',
    sobreNome: 'Henrique'
}

console.log(Object.keys(objetoNovo.nome).length)