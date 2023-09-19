//Lê números IMPARES
let n1 = Number(prompt("Digite um número impar: "));
try {
  if (isNaN(n1)) {
    throw new Error("Você deve digitar um número válido");
  }
  if (n1%2 == 0) {
    throw new Error("O número não é IMPAR!");
  }
  console.log("Número impar digitado:",n1)
} catch (excecao) {
  console.log(`Ocorreu um erro: ${excecao.message}`);
} finally {
  console.log("O código foi executado.");
}