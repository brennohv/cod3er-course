// .filter ; filtra um array e cria um novo array com determinado fator de filtro.

const produtos = [ // criei um array com objeto.
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return false
}))

const produtoCaro = produto => produto.preco >= 500 // Criei function com uma condicional que o preco seja maior ou igual a 500.
const produtoFragil = produto => produto.fragil // Criei function com uma condicional de ser fragil.

const resultado = produtos.filter(produtoCaro).filter(produtoFragil) /* Aqui coloquei o array e apliquei o .filter e dei
como parametros as functions para filtrar o array da maneira que gostaria */
console.log(resultado)

const resultado2 = produtos.filter(produto => produto.preco <= 1000).filter(produto => produto.fragil == false)

console.log(resultado2)