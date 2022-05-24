// coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //Com [ ] tambem consigo nomear o atributo de um objeto.
produto.preco = 220

console.log(produto)
delete produto.preco // posso deletar atributos de um objeto com o delete
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {    // dentro dos atributos posso ter outros objetos.
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ // posso ter array
        nome: 'Junior',
        idadde: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // posso ter function dentro de objetos
    }
}


carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['logradouro'] // posso chamar dessa maneira também
console.log(carro)
delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro // deletar uma function
console.log(carro)