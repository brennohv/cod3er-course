const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) /* Nesse exemplo ele fez uma constante que recebe uma function,
com 3 parametros; A, B, OPERACAO, e em OPERACAO ele deixou como padrao a const SOMA acima... com outras palavras, 
se eu nao der o valor do parametro OPERAÇÃO ele vai assumir o valor da const SOMA mencionada acima.*/
{ console.log(operacao(a, b))}

imprimirResultado(2,3)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function (x, y) {
    return x - y                       // Aqui ele atribui uma function como 3 parametro na chamada da funcao.
})
imprimirResultado(3,4, (x, y) => x * y) /* Aqui ele atribui uma arrow function como 3 parametros, 
obs : nao teve como tirar os parenteses porque tem mais de 1 parametro. Arrow Function sempre sera anonima,
o que posso fazer é armazenar ela em uma variável */

const pessoa = {
    falar: function(){
        console.log('opa')       // function dentro de um atributo de um objeto
    }
}

pessoa.falar()  // sempre que quiser chamar um atributo de tal objeto usar o nome do obj.atributo nesse caso com parentese pq é uma function.