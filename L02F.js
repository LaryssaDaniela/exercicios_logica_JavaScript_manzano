//Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.
A = parseFloat(prompt("Digite o valor de A:"));
B = parseFloat(prompt("Digite o valor de B:"));
C = parseFloat(prompt("Digite o valor de C:"));

if (A > B) {
    troca = A;
    A = B;
    B = troca;
}

if (A > C) {
    troca = A;
    A = C;
    C = troca;
}

if (B > C) {
    troca = B;
    B = C;
    C = troca;
}

console.log("Valores em ordem crescente:", A, B, C);