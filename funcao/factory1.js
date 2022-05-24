// factory simples é uma funçao que retorna um objeto, ela fabrica um objeto, instancia um objeto.

function criarPessoa (){
    return {              // após o return colocar o objeto { }
        nome: 'Ana',
        sobrenome: 'Julia'
    }
}

console.log(criarPessoa())
