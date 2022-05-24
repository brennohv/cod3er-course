/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês. */

function calcularSalario(horasTrabalhadas, valorHora) {
   let salario = (horasTrabalhadas * valorHora) * 25 
    return `Salário igual a ${salario.toFixed(2).replace('.', ',')} R$`
}

const salarios = [
    {nome: 'Rodrigo', salarioMes: calcularSalario(10, 25)},
    {nome:'Mariana', salarioMes: calcularSalario(6,10)},
    {nome: 'Douglas', salarioMes: calcularSalario(12, 30)}
]

const soSalarios = salario => salario.salarioMes 
const salariosMaiores = salario => salario.salarioMes >= 1500

const arraySoSalarios = salarios.filter(salariosMaiores)
console.log(arraySoSalarios)

