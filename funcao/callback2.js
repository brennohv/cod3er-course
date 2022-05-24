const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback

let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] <= 7) {
        notasBaixas1
    .push(notas[i])
    }
}

console.log(notasBaixas1
)

// Com callback

const notasBaixas2 = notas.filter(function (nota) { /* Filter é uma function que vai filtrar os elementos
     do array em cima de um determinado criterio. Que retorna true ou false... no exemplo abaixo todas as notas que forem 
     menores que 7 vai ser true e vai ser puxada do array. */
    return nota < 7
})

console.log(notasBaixas2)

// Com ARROW

const notasMenoresQue7 = nota => nota < 7 /* Armazenei uma Arrow Function a uma const que recebe uma nota,
 e essa nota tem que ser menor que 7 */
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)
