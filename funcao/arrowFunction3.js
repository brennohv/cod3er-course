let comparaCoThis = function (param) {
    console.log(this === param)
}
comparaCoThis(global)

const obj = {}
comparaCoThis = comparaCoThis.bind(obj)
comparaCoThis(global)
comparaCoThis(obj)

let comparaCoThisArrow = param => console.log(this === param)
comparaCoThisArrow(global)
comparaCoThisArrow(module.exports)

comparaCoThisArrow = comparaCoThisArrow.bind(obj)
comparaCoThisArrow(obj)
comparaCoThisArrow(module.exports)

//Arrow function nao tem alteração com .bind.