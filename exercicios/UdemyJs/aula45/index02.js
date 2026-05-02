function retornarHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-2020 12:46:12");
  const hora = retornarHora();
  console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log('tenha um bom dia.')
}
