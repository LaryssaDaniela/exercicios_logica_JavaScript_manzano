/*Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e
D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro
valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma
(variável S) do segundo com o quarto valor.*/

A = parseInt(prompt("Digite o valor inteiro A:"));
B = parseInt(prompt("Digite o valor inteiro B:"));
C = parseInt(prompt("Digite o valor inteiro C:"));
D = parseInt(prompt("Digite o valor inteiro D:"));
P = A * C;
S = B + D;
console.log("Produto de A e C (P):", P);
console.log("Soma de B e D (S):", S);