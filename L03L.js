//Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
valor = parseInt(prompt("Digite um valor positivo inteiro (ou um valor negativo para sair):"));

if (valor >= 0) {
    maior = valor;
    menor = valor;

    while (valor >= 0) {
        if (valor > maior) {
            maior = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
        valor = parseInt(prompt("Digite outro valor positivo (ou negativo para sair):"));
    }

    console.log("Maior valor informado:", maior);
    console.log("Menor valor informado:", menor);
} else {
    console.log("Nenhum número positivo foi informado.");
}