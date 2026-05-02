// Escreva uma função que recebe um número e retorne o seguinte:
// - "fizz" se o número for divisível por 3;
// - "buzz" se o número for divisível por 5;
// - "fizzbuzz" se o número for divisível por 3 e por 5;
// - O próprio número caso não seja divisível por 3 ou por 5;
// - "o proprio numero (texto)" caso o valor de entrada não seja um número.
// Use a função com números de 0 a 100.

function fizzBuzz(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) return 'fizzbuzz'
    if (num % 3 === 0) return 'fizz' // nao podemos deixar o fizz e o buzz antes do fizzbuzz, pois o fizzbuzz é mais especifico, entao ele tem que ser verificado primeiro
    if (num % 5 === 0) return 'buzz'
    return num
}
    console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}