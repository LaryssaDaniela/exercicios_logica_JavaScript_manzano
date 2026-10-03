//Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.
soma = 0;
contador = 1;

while (contador <= 10) {
    valor = parseFloat(prompt("Digite o valor " + contador + ":"));
    soma = soma + valor;
    contador = contador + 1;
}

media = soma / 10;

console.log("Somatório:", soma);
console.log("Média aritmética:", media);