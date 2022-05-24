const pessoa = { // { } SIGNIFICA OBJETO
        saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // this dependendo do lugar ela aponta para outros lugares
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) /* .BIND garante que aquela function apontada para um componente, 
sempre aponte para aquele componente, que no exemplo é PESSOA. */
falarDePessoa()