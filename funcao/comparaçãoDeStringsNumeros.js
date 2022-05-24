/*Comparação entre string de números
E ai pessoal, hoje vou trazer um assunto interessante que acontece dentro do Javascript que é a comparação entre números em formato string.

Abaixo temos uma cadeia de string de números.*/

const cadeia_de_strings = '1, 2, 3, 4, 5, 6, 7, 8, 9'
/*Se pegarmos alguns dos valores da cadeia de strings e fizermos a comparação entre nossas strings de número até o nove, 
ela mantem um comportamento normal. Como se estivéssemos comparando números. */

console.log('1' > '2')
//output : false
console.log('1' > '1')
//output : false
console.log('2' > '1')
//output : true
console.log('4' > '2')
//output : true
/*Agora se compararmos os valores depois do nove, a comparação irá validar o primeiro número da cadeia numeral, 
validando sua ordem alfabética. Por exemplo: */

console.log('2' > '12')
//output : true
console.log('5' > '42')
//output : true
console.log('3' > '29')
//output : true 

//Com isso, podemos ver que não é uma abordagem muito boa comparar números em formato de string.