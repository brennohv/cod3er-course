function Pessoa(nome) {
  this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)  // Function construtora
    }
}

const p1 =  new Pessoa('Joao')
p1.falar()


