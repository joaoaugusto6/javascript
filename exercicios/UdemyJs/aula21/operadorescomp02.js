/*
Opreradores de comparação
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igualdade (valor) - não recomendado
=== igualdade estrita (valor e tipo)
!= diferente (valor) - não recomendado
!== diferente estrito (valor e tipo)
*/

const num1 = 10;
const num2 = 10;
let comp = num1 == num2; // compara somente valor, igualdade
console.log(comp);

const comp2 = num1 === num2; // compara valor e tipo, igualdade
console.log(comp2);

const comp3 = num1 != num2; // compara somente valor, diferente de
console.log(comp3);

const comp4 = num1 !== num2; // compara valor e tipo, diferente de
console.log(comp4);
