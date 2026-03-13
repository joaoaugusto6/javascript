var num = [8, 1, 7, 4, 2, 9]

num.sort() // Coloca os valores em ordem crescente

// console.log(num) mostra o vetor completo até com os colchetes

/* forma mais burra de usar o vetor, mostrando um valor por vez e escrevendo o comando várias vezes, o que não é recomendado
console.log(num[0])
console.log(num[0])
console.log(num[0])
console.log(num[0])
console.log(num[0])
console.log(num[0])
*/

/*for (var pos = 0; pos < num.length; pos++) { // serve para mostrar o vetor, mas de forma mais simplifada
    console.log(`A posição ${pos} tem o valor${num[pos]}`)
}
*/

for (var pos in num) { // outra forma de mostrar o vetor, mas de forma mais simplifada que a de cima
    console.log(`A posição ${pos} tem o valor${num[pos]}`)
}
