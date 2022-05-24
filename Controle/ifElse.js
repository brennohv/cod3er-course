const imprimirRedultado = function(nota) {
    if(nota >= 7) { // Se 
        console.log('Aprovado') 
    } else { // Caso o de cima for falso vai imprimir else
        console.log('Reprovado')
    }
}

imprimirRedultado(5)
imprimirRedultado(10)
imprimirRedultado('Epa!') // Cuidado!!
