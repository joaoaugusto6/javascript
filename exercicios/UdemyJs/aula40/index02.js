const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// continue continua para proxima interação
// break sai do laço (loop)

let i = 0;

do {
    let numero = numeros[i]
    if (numero === 2) {
        console.log('pulei o número 2');
        i++;
        continue;
    }

    console.log(numero)

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++;
        break;
    }

    i++;
} while (i < numeros.length)