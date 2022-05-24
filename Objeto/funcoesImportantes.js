const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso13: 13
}

console.log(Object.keys(pessoa)) // funcao que le as chaves de um Object
console.log(Object.values(pessoa)) // funcao que le os valores de um Object
console.log(Object.entries(pessoa)) // funcao que le chave e valor

Object.entries(pessoa).forEach(([chave, valor]) => {  //
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento' , {  // Uma forma de atribuir um atributo com certas caracteriscas ou visibilidades.
    enumerable: true,  // incontavel
    writable: false,   // nao consigo modificar é como se eu tivesse congelado esse atributo.
    value: '01/01/1970'  // inserindo o valor do atributo.
}) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Obeject.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obb = Object.assign(dest,o1,o2) /* funcao que apos o primeiro parametro, 
                                         sera concatenado os outros parametros ao primeiro objeto.*/

console.log(obb)

Object.freeze(obb) // congela o objeto
obb.c = 1234
console.log(obb)
