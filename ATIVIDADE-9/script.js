// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

let velocidadeCarro = Number(prompt("Digite a velocidade do carro"));

if (velocidadeCarro > 80) {
  let multa = (velocidadeCarro - 80) * 5;
  document.write("Você foi multado em ", multa);
} else {
  document.write("Você estava dentro da velocidade permitida! continue assim.");
}
