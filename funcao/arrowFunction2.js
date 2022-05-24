function pessoa() {
    this.idade = 0

    setInterval(() => { // Na ARROW function o this nao muda referente ao local chamado.
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) 
}

new pessoa