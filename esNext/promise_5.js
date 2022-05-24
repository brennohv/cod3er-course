function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random(0, 1) < chanceErro) {
            reject('Ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.2)
    .then(console.log)
    .catch(erro => console.log(`Erro: ${erro}`))   //.catch É a forma em que tratamos o erro, caso nao trate o erro
    //vai dar problema na aplicação.