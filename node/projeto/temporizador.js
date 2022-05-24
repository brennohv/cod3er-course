const schedule = require('node-schedule') // temporizador 
                                                                         // se colocar so o segundos sem */ ele interpreta que so no segundo 5 de cada minuto e nao de 5 em 5 segundos.
const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 4', function(){       // ordem (segundos, minutos, hora, dia do mes, mes, dia da semana: começando por 0 domingo.)
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)  // temporizador JavaScript

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // De segunda a sexta feira 
regra.hour = 17 // As 17 horas
regra.second = 5 // no segundo 5 

const tarefa2 = schedule.scheduleJob(regra, function() {  // Nesse exemplo eu armazenei a regra de execução em uma constante e informei a constante como parametro.
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})