const fs = require('fs')

const lerAquivoTXT = caminho => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8',function(erro, conteudo) { // Forma de ler assincrono um arquivo.
            resolve(conteudo)
        })
    })
}

const caminho = __dirname + '/dados.txt'
lerAquivoTXT(caminho)  
    .then(console.log)
    .then(x => x[1])
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))