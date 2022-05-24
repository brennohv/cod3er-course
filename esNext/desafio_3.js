const fs = require('fs')
const caminho = __dirname + '/dados.txt'

function lerAruivo (caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8' ,function(erro, conteudo) {
            resolve(conteudo)
        })
    })
}


lerAruivo(caminho)
    .then(console.log)
 

