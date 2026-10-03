/*Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída.*/

A = parseInt(prompt("Digite o valor de A:"));
B = parseInt(prompt("Digite o valor de B:"));
C = parseInt(prompt("Digite o valor de C:"));
D = parseInt(prompt("Digite o valor de D:"));

somaAB = A + B;
somaAC = A + C;
somaAD = A + D;
somaBC = B + C;
somaBD = B + D;
somaCD = C + D;

multiplicaAB = A * B;
multiplicaAC = A * C;
multiplicaAD = A * D;
multiplicaBC = B * C;
multiplicaBD = B * D;
multiplicaCD = C * D;

console.log("Soma A+B:", somaAB);
console.log("Soma A+C:", somaAC);
console.log("Soma A+D:", somaAD);
console.log("Soma B+C:", somaBC);
console.log("Soma B+D:", somaBD);
console.log("Soma C+D:", somaCD);

console.log("Multiplicação A*B:", multiplicaAB);
console.log("Multiplicação A*C:", multiplicaAC);
console.log("Multiplicação A*D:", multiplicaAD);
console.log("Multiplicação B*C:", multiplicaBC);
console.log("Multiplicação B*D:", multiplicaBD);
console.log("Multiplicação C*D:", multiplicaCD);