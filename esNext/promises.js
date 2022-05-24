function falarDepois(segundos, frase) {
    return new Promise((resolve, reject) => {  // primeiro parametro sempre é caso a promise seja resolvida e 2 é o erro
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepois(3, 'Que legal!')
    .then(resultado => resultado.concat('?!?')) //Sempre que quiser acessar o resoluçao do promisse colocar o .THEN 
    // .then o parametro vai ser o valor que esta em resolve de promises
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // .catch é para tratar um erro.



    // posso chamar .then um atras do outro, por exemplo:
    // um .then eu chamar um filtro, no outro .then chamar um map, e por final reduce. Vou ter o resultado no final 