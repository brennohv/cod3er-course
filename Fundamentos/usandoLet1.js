let numero = 1 // criei um Let numero fora do scopo 
{
    let numero = 2 // criei o Let com o mesmo nome de cima mas em um scopo
    console.log('dentro =', numero) /* coloquei para imprimir no console dentro do scopo, vai buscar o let dentro do scopo, 
    que é o 2, caso nao tenho ele abrange a busca para fora do scopo*/

}
console.log('fora =', numero) // coloquei para imprimir no console fora do scopo e buscou o 1
