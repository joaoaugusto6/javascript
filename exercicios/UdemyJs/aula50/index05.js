const conta = (...args) => { // operador rest para pegar o restante dos argumentos
    console.log(args);
};

conta('+', 0, 20, 30, 40, 50);