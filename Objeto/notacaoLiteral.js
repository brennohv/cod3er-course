const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // usando um valor de uma constante, para criar um atributo de um object... usar [ ]
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

const obj5 = {
    funcao1: function () {
        //forma antida tinha que informar o nome do atributo, que recebia um function ....
    },
    funcao2() {
        //Forma nova suporta essa forma literal, so nome da function(){}
    }
}
console.log(obj5)