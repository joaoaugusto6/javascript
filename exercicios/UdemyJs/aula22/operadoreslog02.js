/*
Operadores Lógicos
&& -> AND -> E = Todas as expressões precisam ser verdadeiras para retornar verdadeiro
|| -> OR -> OU
! -> NOT -> NÃO
*/

const usuario = 'João';
const senha = '123456';

//                       true                false
const vaiLogar = usuario === 'João' || senha === '12345';
console.log(vaiLogar) // true

//                        true                true
const vaiLogar1 = usuario === 'João' && senha === '123456';
console.log(vaiLogar1) // true

console.log('--------------------------------------------------')

console.log(!true) // nega somente uma vaz
console.log(!!true) // nega as duas vezes e volta ao valor original
