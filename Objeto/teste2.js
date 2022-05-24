let allCats = [
    {
        name: 'moidos'
    },
    {
        name: 'soluveis'
    },
    {
        name: 'pastilhas'
    }
]

let cats = {
    moidos: true,
    soluveis: true,
    pastilhas: false
}

const entries = Object.entries(cats).filter(cat => cat[1] === true)
const entriesFiltro = entries.map((cat) => { return {name : cat[0]}})

const filtro = allCats.filter((cat) => Object.keys(cats).filter((key) => key === cat.name && cats[key] === true ))

console.log(filtro)
console.log(Object.entries(cats))
console.log(entries)
console.log(entriesFiltro)