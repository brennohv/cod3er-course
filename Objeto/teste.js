function criarPessoa (nome, idade, sexo) {
    this.nome = nome
    this.idade = idade 
    this.sexo = sexo 
    this.apresentacao = () => {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, e sou ${this.sexo}`}
}

const nome1 = new criarPessoa('Julio', 30, 'Masculino')
console.log(nome1.apresentacao())


