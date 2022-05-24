const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Exclui o ultimo elemento 
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na ultima posição
console.log(pilotos)

pilotos.shift() // Exclui o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adcionar e remover elementos

// adicionar
pilotos.splice(2, 0 , 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Slice pega apartir de determinado indice de um array, no exempo: indice 2 a frente.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Esse modelo eu determino ate qual indice ele vai pegar, o 2 elemento n entra.
console.log(algunsPilotos2)