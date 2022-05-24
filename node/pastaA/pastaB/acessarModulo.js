const moduloA = require('../../moduloA') // Para cada pasta que eu saia preciso colocar ../ 
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

// pode so passar o ./NomeDaPasta se dentro dessa pasta tiver um modulo de index.js

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)