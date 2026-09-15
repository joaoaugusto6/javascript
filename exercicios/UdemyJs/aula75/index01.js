// new Object -> Object.prototype
const objetoA = {
    chaveA: 'A',
    // __proto__: Object.prototype
};

const objetoB = {
    chaveB: 'B',
    // __proto__: objA
};

const objetoC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objetoB, objetoA);
Object.setPrototypeOf(objetoC, objetoA);
console.log(objetoB.chaveA); // A
