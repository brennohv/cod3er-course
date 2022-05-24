{
    {
        {
            {
                var sera = 'sera???' /* VAR estará visivel em qualquer lugar mesmo em em blocos como no caso abaixo,
                consigo chamar ela sem o console.log fora do bloco*/
            }
        }
    }
}

console.log(sera)

function teste() 
{
    var local = 123
    console.log(local) /* O que nao acontece se declarar uma variavél dentro do corpo de uma função, nao consigo acessar
    ela fora desse corpo */
}

teste()
console.log(local)
