//Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.
primeiraLeitura = true;

do {
    valor = parseInt(prompt("Digite um número positivo inteiro (ou um número negativo para sair):"));
    
    if (valor >= 0) {
        if (primeiraLeitura) {
            maior = valor;
            menor = valor;
            primeiraLeitura = false;
        } else {
            if (valor > maior) {
                maior = valor;
            }
            if (valor < menor) {
                menor = valor;
            }
        }
    }
} while (valor >= 0);

if (!primeiraLeitura) {
    console.log("Maior valor informado:", maior);
    console.log("Menor valor informado:", menor);
} else {
    console.log("Nenhum número positivo foi informado.");
}