/*Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME  COMPRIMENTO * LARGURA * ALTURA.*/

comprimento = parseFloat(prompt("Digite o comprimento:"));
largura = parseFloat(prompt("Digite a largura:"));
altura = parseFloat(prompt("Digite a altura:"));
volume = comprimento * largura * altura;
console.log("Volume da caixa:", volume);