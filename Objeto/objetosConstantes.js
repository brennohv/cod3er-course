// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro' // consigo mudar o objeto pois nao mudei a constante e ela continua apontando para o mesmo endereço.
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome:'Ana'} // Nao consigo alterar pois estou tentado mudar o endereço de memoria de pessoa que é uma const.

Object.freeze(pessoa) // Congela um object, nao consegue alterar, adicionar, ou deletar atributos do objeto.

pessoa.nome = 'Maria' //alterar
pessoa.end = 'Rua ABC' //adicionar
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)