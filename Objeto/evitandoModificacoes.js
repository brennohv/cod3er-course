// Object.preventeExtensions

const produto = Object.preventExtensions({  //.preventExtensions impede que vc adicione mais atributos ao objeto.
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal

const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa) // Éssa opçao sela o objeto, nao consigo adcionar deletar, so consigo modificar o valor dos attr.
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Henrique'
pessoa.idade = 29
pessoa.nome = 'Roberta'

console.log(pessoa)

//Object.freeze = selado + valores constantes (nao consigo modificar valores)
