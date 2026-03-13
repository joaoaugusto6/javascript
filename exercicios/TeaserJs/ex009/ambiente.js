var num = [5, 8, 2, 9, 3]
num.push(1) // Adiciona um valor ao final do vetor
num.sort() // Coloca os valores em ordem crescente
console.log(`Nosso vetor é o ${num}`) //mostra o vetor
console.log(`O vetor tem ${num.length} posições`) //mostra quantas posições tem o vetor
console.log(`O primeiro valor do vetor é ${num[0]}`) //mostra o primeiro valor do vetor

var pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`) //mostra a posição do valor 8

var pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor 4 não foi encontrado!`)
} else {
    console.log(`O valor 4 está na posição ${pos}`)
}