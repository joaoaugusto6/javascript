/*
&& -> true && false -> false "o valor mesmo"
|| -> true || false -> vai retornar o valor verdadeiro "o valor mesmo"

FALSY
false
0
'' "" ``
null / undefined
NaN
*/

console.log('Luiz' && 0 && 'Maria'); // Maria
console.log('Luiz' && NaN && 'Maria'); // NaN
console.log('Luiz' && "" && 'Maria'); // Maria
console.log('luiz' && undefined && 'Maria'); // undefined