// operador ... rest(juntar)/spread(espalhar)
// usar rest com paramêtro de função

// usar spread com objeto 
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}  //Aqui informei que pegar todos os atributos de funcionario e colocar no clone
console.log(clone)

// usar spread com array 
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFianl = ['Maria', ...grupoA, 'Rafaela'] // A mesma coisa de cima so que com Array.
console.log(grupoFianl)