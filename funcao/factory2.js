function criarProduto (nome, preço) {
    return {
        nome, 
        preço, 
        desconto: 0.1
    }
}

console.log(criarProduto("iphone12", 5999.00))
console.log(criarProduto('ipad', 1149.00))      // Estou criando varios produtos atraves da function factory.
console.log(criarProduto('Rolex', 2149.00))

