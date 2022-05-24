console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {                          // exports = algo... Nao vai dar certo, somente com module.exports
    nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true}  // Aqui informei para aonde ele deve apontar... subscrevi...