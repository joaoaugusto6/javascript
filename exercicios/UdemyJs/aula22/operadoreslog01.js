/*
Operadores Lógicos
&& -> AND -> E = Todas as expressões precisam ser verdadeiras para retornar verdadeiro
|| -> OR -> OU
! -> NOT -> NÃO
*/


const expressaoAnd = true && true && true && true;
console.log(expressaoAnd) // true

const expressaoOr = false || false || true || false;
console.log(expressaoOr) // true

const expressaoNot = !true; // false
console.log(expressaoNot) // false

const expressaoNot2 = !!false; // false
console.log(expressaoNot2) // false