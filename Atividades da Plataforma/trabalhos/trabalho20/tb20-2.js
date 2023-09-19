let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
try {
  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Você deve digitar números válidos.");
  }
  if (n2 === 0) {
    throw new Error("Não é possível dividir por zero.");
  }
  let resultado = n1 / n2;
  alert(`O resultado da divisão é: ${resultado}`);
} catch (excecao) {
  alert(`Ocorreu um erro: ${excecao.message}`);
} finally {
  console.log("O código foi executado.");
}