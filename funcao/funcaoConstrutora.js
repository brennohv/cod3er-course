function carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () { //this é responsavel para tornar algo visivel para fora da function
        if (velocidadeAtual + delta <= velocidadeMaxima) { /* explicando o codigo; this.acelerar recebe uma function
            sem parametros e se a valocidade Atual + delta, for menor ou igual a velocidade maxima */
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima // caso contrario volcidade atual recebe velocidade maxima 
        }
    }

    //metodo publico
    this.getVelocidadeAtual = () => {
        return velocidadeAtual /* para nao tornar a let velocidadeAtual publica criei uma nova function getVelocidadeAtual 
        que recebe o let velocidadeAtual, assim o usario nao consegue alterar a velocidadeAtual. */
    }
}

const uno = new carro /* New carro; instaciei a function carro... explicando em outras palavras,
 fiz uma copia da function carro e usei ela como base na const uno. */
uno.acelerar() // aqui consigo acessar o acelerar pq coloquei o this. dentro da function e torna ele visivel fora.
console.log(uno.getVelocidadeAtual())

const ferrari = new carro(350, 20) // Aqui novamente instanciei o function carro, mas defini que a vel max 350 e delta 20
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())