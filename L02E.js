//Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.
A = parseFloat(prompt("Digite o valor de A:"));
B = parseFloat(prompt("Digite o valor de B:"));
C = parseFloat(prompt("Digite o valor de C:"));

if (A === 0) {
    console.log("O valor de A não pode ser zero para uma equação do segundo grau.");
} else {
    delta = (B ** 2) - (4 * A * C);
    if (delta < 0) {
        console.log("A equação não possui raízes reais.");
    } else {
        raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
        raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
        console.log("Primeira raiz (X1):", raiz1);
        console.log("Segunda raiz (X2):", raiz2);
    }
}