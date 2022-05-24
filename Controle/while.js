function getInteiroAleatorioEntre(min, max) {
     const valor = Math.random() * (max-min) + min
     return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) { /* WHILE é uma repetição sem quantidade de vezes a ser repetida, 
    ate encontrar determinado fator, que no caso foi o -1. */
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a proxima!')