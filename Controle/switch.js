const imprimirResultado = function(nota){
    switch (Math.floor(nota)) { // swuitch serve para multiplas seleções 
        case 10: case 9: // case quer dizer; caso o valor seja o mencionado a frente ele entrara nessas condições.
         // falando com proprias palavras; caso a nota for 10 e 9, imprima no console "Quadro de Honra"
            console.log('Quadro de Honra')
            break /* No switch mesmo que ele tenha a condicional passada, ele vai executar os outros case.
            BREAK funciona para parar de executar. */
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)