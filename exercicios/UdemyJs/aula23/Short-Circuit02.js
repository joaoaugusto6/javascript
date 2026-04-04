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

function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Jãosin';

console.log(vaiExecutar && falaOi()); // false