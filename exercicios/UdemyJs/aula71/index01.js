// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: false, // mostra a chave
    value: estoque, // valor
    writable: false, // pode alterar o valor
    configurable: true, // configurável
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: false, // serve para alterar o valor
      configurable: true // serve pra configurar a chave, se pode apagar ou não
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: false, // serve para alterar o valor
      configurable: true // serve pra configurar a chave, se pode apagar ou não
    }
  })
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1)); // mostra as chaves do objeto

for (let chave in p1) {
  console.log(chave);
}


