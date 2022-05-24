let num1 = 1
let num2 = 2

num1++ // ++ acrescente uma unidade a variavel
console.log(num1)
--num1 // -- Diminui uma unidade a variavel
console.log(num1)

console.log(++num1 === num2--) /* Quando o ++ ou -- esta antes ele tem uma forma mais apressada para fazer o que pedimos, 
temos um exemplo perfeito aqui, lendo o codigo seria; acrescentando uma unidade em NUM1 é estritamente igual a NUM2,
e so depois ele diminuiria 1 unidade em NUM2. */

console.log(num1 === num2)