const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sincrono... Nao é a melhor escolha para arquivos de grande extensao, pois vai travar o event lup

const conteudo = fs.readFileSync(caminho, 'utf-8') // utf-8 foi qual o tipo escrita utilizada, que fica na parte inferir
console.log(conteudo)                              // azul. Sempre colocar o tipo de escrita.

// assincrono... Ideal para arquivos grandes, pois passa uma calback para quando o arquivo estiver pronto ele executar.

fs.readFile(caminho, 'utf-8', (err, conteudo) => {  // Função callback para delegar a requisição e quando estiver pronta
    const config = JSON.parse(conteudo)             // ele retorna a requisição, serve para pedidos pesados e nao travar o
    console.log(`${config.db.host}:${config.db.port}`) // event lup. Usei o JSON.parse para transformar em objeto o JSON.
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {    //fs.readdir   ler uma pasta.
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})

