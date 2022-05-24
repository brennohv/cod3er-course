const fabricantes = ["Mercedes", "Audi", 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) /* Em array existe o indice e o que esta dentro do indice, esse foreach me parece que percorre 
o array */
fabricantes.forEach(fabricante => console.log(fabricante))
