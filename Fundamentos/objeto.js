const prod1 = {} // isso {} significa um objeto
prod1.nome = 'Celular Ultra Mega' //pode criar um objeto e depois adcionando detalhes 
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo', /*Dessa maneira achei mais facil, colocando ele dentro do objeto, mas a outra função faz sentido para
     criar algo que nao tem em mente no momento */
    preco: 79.90,
}

console.log(prod2)