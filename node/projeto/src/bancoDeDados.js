const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id // Se o produto nao estiver setado, pegue o produto(parametro da função).id = id++
    produtos[produto.id] = produto // se estiver setado pegue { }[id++] = produto 
    return produto // return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto ,getProdutos, excluirProduto}

