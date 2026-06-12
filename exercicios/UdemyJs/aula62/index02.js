// Valor por Referência
//                         0       1       2 
const nomes = new Array('Luca', 'José', 'João');
const removido = nomes.shift() // Remove o 1° elemento do array e retorna o elemento removido

nomes.unshift('Enzo') // Adiciona um elemento no início do array
nomes.push('Caio') // Adiciona um elemento no final do array

console.log(nomes, removido);
