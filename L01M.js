/*Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.*/

A = parseFloat(prompt("Digite o valor A:"));
B = parseFloat(prompt("Digite o valor B:"));
C = parseFloat(prompt("Digite o valor C:"));
quadradoDaSoma = (A + B + C) ** 2;
console.log("Quadrado da soma:", quadradoDaSoma);