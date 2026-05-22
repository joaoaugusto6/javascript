// argumentos que sustenta todos os argumentos enviados para a função

function funcao(a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a, b, c);
}

funcao(1, 2, 3, 4, 5, 6, 7); // 1° soma de todos, 2° a, 3° b, 4° c

console.log('------------------------------');

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3); // vai mostrar os 3 primeiros argumentos e os outros serão undefined

console.log('------------------------------');

function funcao3(a, b) {
    b = b || 0; // se b for falsy (undefined, null, 0, etc.), atribui 0 a b
    console.log(a + b);
}

funcao3(2);

console.log('------------------------------');

function funcao4(a, b = 6) { // b tem um valor padrão de 6
    console.log(a + b);
}

funcao4(2);

console.log('------------------------------');

function funcao5(a, b = 2, c = 4) { 
    console.log(a + b + c);
}

funcao5(2, undefined, 20); // vai usar o valor padrão de b (2) e o valor fornecido para c (20)