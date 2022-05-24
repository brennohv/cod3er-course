console.log(this === global) // fora da function this aponta para module.exports
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma function...')
    console.log(this === module.exports) // Dentro de uma function this aponta para global
    console.log(this === module.exports)
    console.log(this === global)
}
 
logThis()