/*
    Primitivos (imutáveis)- string, number, boolean, undefined, null (bigint, symbol)

    Referência (mutável) - array, object, function
*/

// Primitivo

//          0112    
let nome = 'João';
nome[0] = 'R';
console.log(nome[0], nome); //O valor de nome[0] não pode ser alterado porque strings são imutáveis, então o console.log mostra 'J' e 'João'

let a = 'A';
let b = a; //copia o valor de a para b
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); //b continua com o valor 'A' porque é uma cópia do valor de a, não uma referência