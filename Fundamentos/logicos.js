function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || significa ou 
    const comprarTv50 = trabalho1 && trabalho2 // && significa i 
   // const comprarTV32 = !!(trabalho1 ^ trabalho2 ) bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // nesse exemplo eu so vou comprar a TV32 caso so 1 trabalho de certo, entao coloco a informação se nao for igual da TRUE 
    const mantersaudavel = !comprarSorvete // operador unario 

    return { comprarSorvete, comprarTv50, comprarTV32, mantersaudavel}
}

console.log(compras(true, false))
console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(false, true))