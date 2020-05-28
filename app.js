'use strict'

let today = new Date();
// Obtém a data/hora atual
let data = new Date();
// Guarda cada pedaço em uma variável
let dia     = data.getDate();           // 1-31
let dia_sem = data.getDay();            // 0-6 (zero=domingo)
let mes     = data.getMonth();          // 0-11 (zero=janeiro)
//var ano2    = data.getYear();           // 2 dígitos
let ano4    = data.getFullYear();       // 4 dígitos
let hora    = data.getHours();          // 0-23
let min     = data.getMinutes();        // 0-59
//var seg     = data.getSeconds();        // 0-59
//var mseg    = data.getMilliseconds();   // 0-999
//var tz      = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
let str_data = dia + '/' + (mes+1) + '/' + ano4;
let str_hora = hora + ':' + min;

// Mostra o resultado
//alert('Hoje é ' + str_data + ' às ' + str_hora);
//var data = new Date();
let dias = new Array(
 'domingo','segunda','terça','quarta','quinta','sexta','sábado'
);
console.log('Uma mensagem escondida!');
//alert('Hoje é ' + dias[data.getDay()]);

let formatDate = today.toDateString();
let formatoData2 = 'Hoje é '+ dias[data.getDay()] + ' - ' + str_data + ' às ' + str_hora;

let selectElement = document.getElementById('date');
selectElement.innerHTML = formatoData2;