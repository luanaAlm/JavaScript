const schedule = require('node-schedule')

//*/5(execulte 5 em 5 segundos) *(qualquer minuto) 12(as doze horas) *(qualquer mes) *(qualqer dia do mes) 2(terca)
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 2', function() {
    console.log('Execultando tarefa 1!', new Date().getSeconds());
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa!');
}, 20000)

const regra =  new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //execultar de segunda a sexta
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Execultando tarefa 2!', new Date().getSeconds());
})