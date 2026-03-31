/*
    Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol) - valores copiados

    Referência (mutável) - array, object, function - passados por referência
*/

// Referência

let a = [1, 2, 3];
let b = [...a]; // Usando o operador spread para criar uma cópia do array, evitando que a e b apontem para o mesmo array na memória
let c = b;
console.log(a, b); //a e b apontam para o mesmo array na memória, então ambos mostram [1, 2, 3]

a.push(4);
console.log(a, b); //a e b ainda apontam para o mesmo array, então ambos mostram [1, 2, 3, 4]

b.pop();
console.log(a, b); //a e b ainda apontam para o mesmo array, então ambos mostram [1, 2, 3]

a.push('João');
console.log(a, c); //c também aponta para o mesmo array, então mostra [1, 2, 3]