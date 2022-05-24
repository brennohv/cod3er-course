Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i =0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [ // criei um array com objeto.
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

const produtoCaro = produto => produto.preco >= 500 // Criei function com uma condicional que o preco seja maior ou igual a 500.
const produtoFragil = produto => produto.fragil // Criei function com uma condicional de ser fragil.

const resultado = produtos.filter2(produtoCaro).filter2(produtoFragil) /* Aqui coloquei o array e apliquei o .filter e dei
como parametros as functions para filtrar o array da maneira que gostaria */
console.log(resultado)
