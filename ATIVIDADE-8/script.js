// Faça um algoritmo que leia a idade e peso de um atleta e imprima
// a sua categoria, de acordo com a seguinte tabela:

// Idade Peso Categoria
// Até 12 anos - Infantil
// 13 a 16 anos Até 40kg Juvenil leve
// Acima de 40kg Juvenil pesado
// 17 a 24 anos Até 45kg Sênior leve
// Acima de 45kg até 60kg Sênior médio

// Acima de 60kg Sênior pesado
// Acima de 24 anos - Veterano

let idade = Number(prompt("Digite sua idade"));
let peso = Number(prompt("Digite seu peso"));

if (idade <= 12) {
  console.log("Categoria Infantil");
} else if (idade <= 16) {
  if (peso <= 40) {
    console.log("Categoria Juvenil leve");
  } else {
    console.log("Categoria Juvenil pesado");
  }
} else if (idade <= 24) {
  if (peso <= 45) {
    console.log("Categoria Sênior leve");
  } else if (peso <= 60) {
    console.log("Categoria Sênior médio");
  } else {
    console.log("Categoria Sênior pesado");
  }
} else {
  console.log("Categoria Veterano");
}
