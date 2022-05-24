const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)  //__proto__ apartir dessa chamada consigo acessar quem é a heranca de ferrari
console.log(ferrari.__proto__ === Object.prototype)