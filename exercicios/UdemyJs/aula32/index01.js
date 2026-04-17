let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a] 
[a, b, c] = letras;

console.log(a, b, c); // Uma forma mais fácil de trocar os valores das variáveis, sem precisar de uma variável auxiliar. E é também uma forma mais facil de resolver o desafio q eu tinha resolvido no início do curso.