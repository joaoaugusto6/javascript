const numeros = [
    [1, 2, 3], // indice 0 = [1, 2, 3] -- indice 0 = 1, indice 1 = 2, indice 2 = 3
    [4, 5, 6], // indice 1 = [4, 5, 6] -- indice 0 = 4, indice 1 = 5, indice 2 = 6
    [7, 8, 9] // indice 2 = [7, 8, 9] -- indice 0 = 7, indice 1 = 8, indice 2 = 9
]
const [lista1, lista2, lista3] = numeros;
const [, [,,seis]] = numeros; // Aqui estamos estruturando o array numeros, pegando o elemento do indice 1 (que é o array [4, 5, 6]) e pegando o elemento do indice 2 (que é o número 6) e atribuindo à variável seis. É um metodo muito mais dificil de entender.

console.log(numeros[0][1]); // mostra o numero 2
console.log(numeros[1][2]); // mostra o numero 6
console.log(seis); // mostra o numero 6
console.log(lista1); // mostra o array [1, 2, 3]
console.log(lista3[1]); // mostra o numero 8