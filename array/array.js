// Array é uma estrutura indexada que começa com indice 0.
console.log(typeof Array, typeof new Array, typeof []) 

let aprovados = new Array('Bia', 'Carlos', 'Ana') // criando um array apartir do New Array, que é uma function.

aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados[0]) // imprimindo no console apartir do indice 0, que no caso é 'Bia'
console.log(aprovados[1]) // imprimindo no console apartir do indice 1, que no caso é 'Carlos'
console.log(aprovados[2]) // imprimindo no console apartir do indice 2, que no caso é 'Ana'
console.log(aprovados[3]) // imprimindo no console apartir do indice 3, que nao existe, retorna 'Undefined'

aprovados[3] = 'Paulo' /* adicionando um novo elemento apartir de cochetes [3] e o numero do indice. 
Assim é mais usual para substituir algum elemento do indice. */ 
aprovados.push('Abia') //.Push adiociona um elemento no ultimo indice.
console.log(aprovados.length) // . length informa o tamanho do array.

aprovados[9] = 'Rafael' // Pulei do 4 indice para o 9.
console.log(aprovados.length) // Perguntei qual era o tamanho e retorna 10.
console.log(aprovados === undefined)

console.log(aprovados)
aprovados.sort() // .Sort reorganiza o array por ordem alfabetica.
console.log(aprovados)

delete aprovados[1] //delete o que tem dentro do indice, mas o indice ainda fica como Undefined
console.log(aprovados[1]) // imprimiu Undefined como mencionado acima.
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') /* .splice serve tanto para excluir ou adicionar. primeiro numero é apartir 
de qual indice quero iniciar, o segundo é para quantos indices quero excluir. e para adicionar colocar em ' ' .  */
console.log(aprovados)