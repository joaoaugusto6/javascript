/*
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // 02/01/1970 Timestamp unix ou época unix
const data = new Date(2019, 3); // Mês começa do zero // Ano, Mês, Dia, Hora, Minuto, Segundo, MS
*/
const data = new Date('2019-04-20 20:20:59'); // Formato ISO 8601 ou formato string
console.log(data.toString());