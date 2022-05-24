function novoElemento(tagName, className) {
    const elem = document.createElement(tagName) 
    elem.className = className // Criando uma class para o elemento
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda) // adicionando outro filho no elemento, caso a reversa for true ele coloca o corpo, caso contrario coloca a borda 2 BARREIRA
    this.elemento.appendChild(reversa ? borda : corpo) // adicionando um filho no elemento, caso a reversa for true ele coloca a borda, caso contrario coloca o corpo 1 BARREIRA

    this.setAltura = altura => corpo.style.height = `${altura}px`  // setando uma altura 
}

/* const b = new Barreira(true)
b.setAltura(200)
document.querySelector('[wm-flappy]').appendChild(b.elemento) */

function ParDeBarreiras(altura, abertura, x) { 
    this.elemento = novoElemento('div', 'par-de-barreiras') // Criei uma div .class= "par-de-barreiras"

    this.superior = new Barreira(true) // instanciei a function Barreira que cria as barreiras. Barreira superior
    this.inferior = new Barreira(false) // instanciei a function Barreira que cria as barreiras. Barreira inferior

    this.elemento.appendChild(this.superior.elemento) // colocando dentro da div par-de-barreiras div superior
    this.elemento.appendChild(this.inferior.elemento) // colocando dentro da div par-de-barreiras div inferior
    // Nao entendi muito bem porque tenho que colocar inferior.elemento e superior.elemento

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

const b = new ParDeBarreiras(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b.elemento)