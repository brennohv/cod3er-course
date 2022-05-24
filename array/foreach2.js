Array.prototype.forEach2 = function(calback) {          // Criando uma function dentro de Array.
    for (let i = 0; i < this.length; i++) {
        calback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) { // forEach primeiro parametro sempre sera o valor e depois o indice.
    console.log(`${indice + 1}) ${nome}`)
})