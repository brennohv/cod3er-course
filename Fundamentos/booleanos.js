let isAtivo = false
console.log(isAtivo)

isAtivo = true // 
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! 2 exclamações transforma algo em verdadeiro ou falso 

console.log('os verdadeiros...')
console.log(!!3) // Todos os numeros inteiros sao verdadeiros
console.log(!!-1)
console.log(!!' ') // String com espaço é verdadeiro.
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // String vazia falso. Por exemplo quero saber se em determinado item foi preenchido.
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalaizar...')
console.log(!!('' || null || 0 || ' ')) // || Quer dizer OU. No caso essa expressao da verdadeiro pois pelo menos um deles retornou verdadeiro.

let nome = ''
console.log(nome || 'Desconhecido') // || Exemplo de funcionalidade: Criei uma variavel nome, caso essa variavel esteja vazia imprimir 'DESCONHECIDO'

