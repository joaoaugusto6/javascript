/*
&& -> true && false -> false "o valor mesmo"
|| -> true || false -> vai retornar o valor verdadeiro "o valor mesmo"
*/

/*
Esses valores sao considerados FALSY = falsos
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

const corUsuario = null;
const corPadrao = corUsuario || 'preta';
console.log(corPadrao); // preta

const corUsuario2 = 'vermelha';
const corPadrao2 = corUsuario2 || 'preta';
console.log(corPadrao2); // vermelha

console.log('--------------------------------------------');

const a = 0;
const b = null;
const c = false;
const d = 'False'; // Aqui tem uma string, entao o resultado é o valor mesmo
const e = NaN;
console.log(a || b || c || d || e); // False

console.log(a || b || 'Jãosin' || d || e); // Jãosin