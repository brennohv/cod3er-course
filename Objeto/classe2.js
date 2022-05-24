class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {  // em classe para algo pegar o prototipo, a sintasse é com EXTENDS
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // SUPER intancia o parametro do prototipo. estou dizendo para instanciar de avo o sobrenome.
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)