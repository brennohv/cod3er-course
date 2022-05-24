// Closure é o escopo criado quando uma function é declarada
// esse escopo permite a function acessar e manipular variaveis externas a function

// contexto lexico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}
const minhaFunction = fora()
console.log(minhaFunction())  /* A function carrega consigo o escopo, e no exemplo existia uma const declarada com valor
de x por isso nao puxou o 'Global' */