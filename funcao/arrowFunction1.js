let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a  // Function arrow sempre é anonima, entao sempre temos que armazenar ela em uma variavel.
}

dobro = a => 2 * a // Function arrow de uma linha voce pode tirar os parenteses e corpos, e o RETURN sera implicito.
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // nao usar

console.log(ola())