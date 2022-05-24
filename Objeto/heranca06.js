function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Ate breve', 456)
console.log(aula1, aula2)

// simulando o new 
function novo(F, ...params) {
    const obj = {}
    obj.__proto__ = F.prototype
    F.apply(obj, params)
    return obj
}

const aula3 = novo(Aula,'Bem vindo', 123)
const aula4 = novo(Aula,'Ate breve', 456)
console.log(aula3, aula4)