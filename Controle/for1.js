let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++ // acrecenttou uma unidade ao contador
}

for(let i = 1; i <= 10; i++) { // FOR é uma expressão simplicada da de cima 
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) { // Sempre associar uma var a FOR.
    console.log(`Nota = ${notas[i]}`)
}