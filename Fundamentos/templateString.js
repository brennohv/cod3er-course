const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' // exemplo na concatenação, caso coloque mais informações o codigo fica muito grande e nao pode exceder uma linha.
const template = ` 
      Olá
      ${nome}!` // Com esse ` pode fazer quantas linha quiser...
console.log(concatenacao, template)      

//expressoes...
console.log(`1 + 1 = ${1 + 1}`) //Quando temos o ${} tenta interpretar o que esta dentro.

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)