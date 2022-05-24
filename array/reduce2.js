const alunos = [ // criei um array com objeto.
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, valor){
    return acumulador && valor 
})     // Aqui como a pergunta foi se todos eram bolsistas, o operador que devemos chamar é ou &&, 

console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = alunos.map(a => a.bolsista).reduce((acumulador, valor) => acumulador || valor)

console.log(algumBolsista)  // Aqui como eu preciso somente de 1 bolsista pode ser || que significa ou.