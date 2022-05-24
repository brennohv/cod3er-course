function gerarNumeroEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max] // operador destructoring = informei que se o valor min for maior que o maximo, 
        // com o destructuring atribui o valor max para minimo.
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(1,60)
    .then(num => num * 10 )
    .then(numx10 => `O numero gerado foi ${numx10}`)
    .then(console.log)