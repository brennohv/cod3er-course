const escola = "Cod3r" // String pode ser '' "" ou `

console.log(escola.charAt(4)) // Letra do indice 4 da string que é R
console.log(escola.charAt(5)) // Quando nao tem o numero de caracteres ela nao da nenhuma resposta
console.log(escola.charCodeAt(3)) // Esse é para pegar o valor da tabela ASK de determinado numero da palavra Cod3r
console.log(escola.indexOf(3)) //Esse é para pegar o numero dentro de Cod3r e saber em qual casa ele está que no caso seria 3 (0,1,2,3)

console.log(escola.substring(1)) // Para infomar apartir da casa decimal informada entre parentese, exemplo : "od3r"
console.log(escola.substring(0, 3)) // Delimitar o que vai imprimir entre parentese, exemplo : Cod

console.log('Escola '.concat(escola).concat("!")) // .Concat coloco quando quero juntar a uma sequencia ou logica. Exemplo : Escola Cod3r!
console.log('Escola ' + (escola) + ("!")) // o + no contexto de string vai contatenar, no contexto de number vai somar
console.log(escola.replace('3', 'e')) // replace troca o numero ou letra informada, exemplo : Coder

console.log('Ana,Maria,Pedro'.split(',')) //.split quebra os strings, preciso informar qual é o elemento para tal, no caso aqui foi a ,