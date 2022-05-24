let nomes = new Promise((resolve) => {
    resolve([0, 1, 2, 3])
})


nomes
    .then(indice => indice.map(a => a * 2))
    .then(indice => indice.map(a => a * 2))
    .then(indice => indice.map(a => a * 2))
    .then(indice => indice.map(a => a * 2))
    .then(indice => indice.map(a => a * 2))
    //.then(v => console.log(v))
    .then(console.log)
    
    









