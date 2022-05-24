function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
    resultado.push([ chave , objeto[chave] ])
    return resultado
    }


    function objetoParaArray(objeto) {
        const chaves = Object.keys(objeto)
        const resultado = chaves.map( chave => [chave, objeto[chave]] )
        return resultado
        }

    objetoParaArray({
        nome: "Maria",
        profissao: "Desenvolvedora de software"
        })

