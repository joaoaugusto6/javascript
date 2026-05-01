function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log('------------------');

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

// as duas formas são válidas, a diferença é que no while, se a condição for falsa na primeira vez, o código dentro do while não será executado, já no do while, o código dentro do do while será executado pelo menos uma vez, mesmo que a condição seja falsa.