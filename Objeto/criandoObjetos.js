// usando a notação literal
const obj1 = { }
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object) // Object é uma function e NEW OBJECT é um objeto 
const obj2 = new Object
console.log(obj2)

// Fuction contrutora
function Produto(nome, preco, desconto){
    this.nome = nome
    this.getPreçoComDesconto = () => {
        return preco *(1 - desconto)
    }
}

const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Notebook', 2998.99, 0.25)
console.log(prod1.getPreçoComDesconto(),prod2.getPreçoComDesconto())

//function factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase: `R$ ${salarioBase}`,
        faltas,
        getSalario() {
            return (salarioBase/30) * (30 - faltas) // Criei essa function para saber quanto ele recebera com as faltas.
        }
    }
}

const f1 = criarFuncionario('Roberto',7980, 4)
const f2 = criarFuncionario('Brenno', 11400, 1)
console.log(f1.getSalario(),f2.getSalario())

//OBJECT.CREATE
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)