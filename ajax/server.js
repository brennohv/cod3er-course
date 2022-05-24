// Responsavel por fazer o parser do body da requisição, e deixar esses dados prontos para serem manipulados
const bodyParser = require('body-parser')
const { response } = require('express')
const express = require('express')
const app = express() // Instanciei express
// Provendo os arquivos estaticos, HTML, CSS, JAVASCRIPT, FONTS, dentro da pasta AJAX.        ('.') isso quer dizer dentro da pasta atual, que no caso é AJAX.
app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true })) /* Esse trecho de codigo informa que toda solicitação
que tenha o formato urlencoded vai ser feito um parse e transformado em objeto. */
app.use(bodyParser.json()) /* Todo formato JSON seja transformado em Objeto */

const multer = require('multer')

/*app.get('/teste', (req, res) => res.send('ok')) */ // /teste for invocado apartir de uma requisição do tipo get, vou enviar uma resposta OK.

app.post('/formulario', (req, res) => { // Usando essa função no fetch2.html
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // 3 maneiras de receber dados do seu frontEnd
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0 //A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.  
    // % 2 === 0   qualquer numero divisivel por 2 tem resto 0, quer dizer que ele é par e retorna TRUE
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
app.listen(8080, () => console.log('Executando...')) //Startando o servidor na porta 8080