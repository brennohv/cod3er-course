function area (largura, altura) {
    const area = largura * altura 
    if (area >= 20) {
        console.log(`Valor acima do permitido${area}m2.`) // evitar string em function
    } else {
        return area
    }
}

console.log(area(2, 3))
console.log(area(5, 5))
console.log(area(2, 3, 4, 5, 6)) // Posso passar mais parametros que a function, ele so vai desconsiderar


