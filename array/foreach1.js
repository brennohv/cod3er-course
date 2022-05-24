const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, indice) { // forEach primeiro parametro sempre sera o valor e depois o indice.
    console.log(`${indice + 1}) ${nome}`)
})
aprovados.forEach(nome => console.log(nome))  //Posso disconsiderar o indice.

const exibirAprovados = function (aprovado, indice) { console.log(indice, aprovado) } 
// E posso armazenar a function em uma const.
aprovados.forEach(exibirAprovados)



