//Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.
contadorValores = 1;
somatorioFatoriais = 0;

do {
    valor = parseInt(prompt("Digite o valor inteiro " + contadorValores + " de 15:"));
    
    fatorial = 1;
    contadorFatorial = valor;
    
    while (contadorFatorial > 1) {
        fatorial = fatorial * contadorFatorial;
        contadorFatorial = contadorFatorial - 1;
    }
    
    somatorioFatoriais = somatorioFatoriais + fatorial;
    contadorValores = contadorValores + 1;
} while (contadorValores <= 15);

console.log("Somatório do fatorial dos 15 valores lidos:", somatorioFatoriais);