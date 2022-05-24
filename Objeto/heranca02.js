// Cadeia de protótipos (protorype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' } // Quando quiser colocar alguma henranca de um obj,
const filho = { __proto__: pai, attr3: 'C' } // é so colocar __proto__: obj que quero erdar herança.


console.log(filho.attr1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} KM/H de ${this.velMax} KM/H`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,
    status() {
        return `${this.modelo} : ${super.status()}` // SUPER referencia que é o do prototipo; 
    }
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // nesse momento estabeleci uma relaçao que ferrari pegou herança de carro.
Object.setPrototypeOf(volvo, carro)  // nesse momento estabeleci uma relaçao que volvo pegou herança de carro.

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())