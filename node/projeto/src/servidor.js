// quando esta a trabalhar com uma aplicação que tem comunicação com rede eu preciso declarar uma porta.
const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extend: true })) /* Esse trecho de codigo informa que toda solicitação
que tenha o formato urlencoded vai ser feito um parse e transformado em objeto. */

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()) //O objeto vai converter para JSON. Funçao SEND envia uma resposta.
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => { //O método .listen () cria um ouvinte na porta ou caminho especificado.
    console.log(`Servidor está executando na porta ${porta}`)
})

