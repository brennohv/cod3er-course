let valor // nao inicializada
console.log(valor)

valor = null // ausencia de valor 
console.log(valor)
// console.log(valor.toString()) //Erro !! 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preço = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)