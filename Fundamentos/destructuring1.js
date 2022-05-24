// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
const { nome, idade } = pessoa /* desestruturação de uma variavel, coloca o { e informa qual informção quer tirar } 
apos = nome da variavel, que aqui no exemplo é PESSOA */
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa 
console.log(logradouro, numero, cep)

const { conta: { ag, num }} = pessoa
console.log(ag, num)